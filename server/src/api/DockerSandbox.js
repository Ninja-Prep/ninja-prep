const exec = require("child_process").exec;
const fs = require("fs");

const DockerSandbox = function (
  folderPath,
  dockerImageName,
  absPath,
  outputHandler
) {
  this.folderPath = folderPath;
  this.dockerImageName = dockerImageName;
  this.absPath = absPath;
  this.outputHandler = outputHandler;
};

DockerSandbox.prototype.run = function () {
  this.prepare();
};

DockerSandbox.prototype.prepare = function () {
  const makeOutputDirectory = ["mkdir", this.folderPath].join(" ");
  const copyInitialFiles = [
    "cp",
    this.absPath,
    "InitialCompilerFiles/*",
    this.folderPath,
  ].join(" ");

  const command = [makeOutputDirectory, copyInitialFiles].join(" && ");

  exec(command, this.executeCode());
};

DockerSandbox.prototype.executeCode = function () {
  const sandbox = this;

  let volumeMount = sandbox.folderPath + ":/ninjaprep";
  let siblingDockerMount = "-v /var/run/docker.sock:/var/run/docker.sock";
  const runCodeCommand = [
    "docker run",
    "--network none",
    "--read-only",
    "-itd",
    "-v",
    volumeMount,
    siblingDockerMount,
    "-w",
    "/ninjaprep",
    sandbox.dockerImageName,
  ].join(" ");

  console.log(runCodeCommand);
  // TODO: Set memory allocation limit
  exec(runCodeCommand, (err, containerId) => {
    exec(`docker wait ${containerId}`, (err, exitCode) => {
      sandbox.handleRunExitCodes({ exitCode: parseInt(exitCode) });
    });
  });
};

// 0 - Code Compiles and executes
// 1 - Runtime error
// 2 - Compile error
// 124 - Timeout Error
// Default - Unknown error code
DockerSandbox.prototype.handleRunExitCodes = function (output = { exitCode }) {
  const sandbox = this;
  if (output.exitCode == 2) {
    sandbox.parseErrorFileOutput(output);
  } else {
    sandbox.parseStandardFileOutput(output);
  }
};

DockerSandbox.prototype.parseStandardFileOutput = function (
  output = { exitCode }
) {
  const sandbox = this;
  const outputFilePath = sandbox.folderPath + "/output.txt";

  fs.readFile(outputFilePath, "utf8", (err, stdOutput) => {
    if (err) {
      sandbox.sandboxCleanup();
    } else {
      sandbox.parseErrorFileOutput({ ...output, stdOutput });
    }
  });
};

DockerSandbox.prototype.parseErrorFileOutput = function (
  output = { exitCode, stdOutput }
) {
  const sandbox = this;
  const errorFilePath = sandbox.folderPath + "/error.txt";

  fs.readFile(errorFilePath, "utf8", (err, stdErr) => {
    if (err) {
      sandbox.sandboxCleanup(output);
    } else {
      sandbox.sandboxCleanup({ ...output, stdErr });
    }
  });
};

DockerSandbox.prototype.sandboxCleanup = function (output) {
  const sandbox = this;
  exec(`rm -rf ${sandbox.folderPath}`, () => {
    sandbox.outputHandler(output);
  });
};

module.exports = DockerSandbox;
