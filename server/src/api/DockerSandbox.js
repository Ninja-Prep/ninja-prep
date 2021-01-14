const child = require("child_process");
const fs = require("fs");
const fsPromises = fs.promises;
const util = require("util")
const exec = util.promisify(child.exec);
const { exitCodeMap, detailedStatusCode } = require("./DockerSandboxHelper")

const DockerSandbox = function (
  folderPath,
  dockerImageName,
  absPath,
  programmingLanguage,
  codeSnippet,
  fileName,
  testCases
) {
  this.folderPath = folderPath;
  this.dockerImageName = dockerImageName;
  this.absPath = absPath;
  this.programmingLanguage = programmingLanguage;
  this.codeSnippet = codeSnippet;
  this.fileName = fileName,
    this.testCases = testCases
};

DockerSandbox.prototype.run = function () {
  return this.prepare();
};

DockerSandbox.prototype.prepare = async function () {
  const sandbox = this;
  const makeOutputDirectory = ["mkdir", this.folderPath].join(" ");
  const createInitialFiles = [
    "touch",
    this.folderPath + "/output.txt",
    this.folderPath + "/error.txt",
  ].join(" ");

  const command = [makeOutputDirectory, createInitialFiles].join(" && ");

  await exec(command);
  return sandbox.copyCodeSnippet();
};

DockerSandbox.prototype.copyCodeSnippet = async function () {
  const sandbox = this;
  const codeSnippetFilePath = sandbox.folderPath + "/" + sandbox.fileName;
  const testCasesPath = sandbox.folderPath + "/testcases.txt";
  await fsPromises.writeFile(codeSnippetFilePath, sandbox.codeSnippet)
  await fsPromises.writeFile(testCasesPath, sandbox.testCases)
  return sandbox.executeCode()
};

DockerSandbox.prototype.executeCode = async function () {
  const sandbox = this;
  let volumeMount = sandbox.folderPath + ":/ninjaprep";
  const runCodeCommand = [
    "docker run",
    "--network none",
    "--read-only",
    "-itd",
    "-v",
    volumeMount,
    "-w",
    "/ninjaprep",
    sandbox.dockerImageName,
  ].join(" ");

  console.log(runCodeCommand);
  // TODO: Set memory allocation limit
  const containerId = await (await exec(runCodeCommand)).stdout
  let exitCode = await (await exec(`docker wait ${containerId}`)).stdout
  exitCode = parseInt(exitCode)
  const detailedExitCode = exitCodeMap[exitCode]

  // const stdout = await fsPromises.readFile(sandbox.folderPath + "/output.txt", "utf-8");
  // const stderr = await fsPromises.readFile(sandbox.folderPath + "/error.txt", "utf-8");

  exec(`docker rm ${containerId}`)

  return { detailedExitCode, stdout, stderr }
};

// 0 - Code Compiles and executes
// 1 - Runtime error
// 2 - Compile error
// 124 - Timeout Error
// Default - Unknown error code

module.exports = DockerSandbox;
