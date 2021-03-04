const child = require("child_process");
const fs = require("fs");
const fsPromises = fs.promises;
const util = require("util");
const exec = util.promisify(child.exec);
const encrypt = require("crypto");
const { exitCodeMap, checkerExitCodeMap } = require("./DockerSandboxHelper");

const absPath = __dirname + "/";
class DockerSandbox {
  constructor(dockerDetails) {
    this.dockerDetails = dockerDetails;
    const hash = this.randomHash(5);
    this.folderPath = absPath + "temp/" + hash;
  }

  async run(submissionSnippet, testCase) {
    await exec(`mkdir ${this.folderPath}`);
    try {
      await this.prepare();
      await this.copyCodeSnippet(submissionSnippet, testCase);
      return this.executeCode({ isChecker: false });
    } catch (err) {
      exec(`rm -rf ${this.folderPath}`);
    }
  }

  async runChecker(checkerSnippet, userOutput, solutionOutput, testCase) {
    await exec(`mkdir ${this.folderPath}`);
    try {
      await this.copyCheckerCodeSnippet(checkerSnippet, userOutput, testCase);
      return await this.executeCode({
        isChecker: true,
        userOutput,
        solutionOutput,
        testCase,
      });
    } catch (err) {
      exec(`rm -rf ${this.folderPath}`);
    }
  }

  async copyCheckerCodeSnippet(checkerSnippet, userOutput, testCase) {
    const sandbox = this;
    const checkerSnippetFilePath =
      sandbox.folderPath + "/" + sandbox.dockerDetails.fileName;
    const testCasesPath = sandbox.folderPath + "/TestCase.txt";
    const userOutputPath = sandbox.folderPath + "/UserOutput.txt";
    await fsPromises.writeFile(checkerSnippetFilePath, checkerSnippet);
    await fsPromises.writeFile(testCasesPath, testCase);
    await fsPromises.writeFile(userOutputPath, userOutput);
  }

  async prepare() {
    const createInitialFiles = [
      "touch",
      this.folderPath + "/output.txt",
      this.folderPath + "/error.txt",
    ].join(" ");

    await exec(createInitialFiles);
  }

  async copyCodeSnippet(submissionCodeSnippet, testCase) {
    const sandbox = this;
    const submissionCodeSnippetPath =
      sandbox.folderPath + "/" + sandbox.dockerDetails.fileName;
    const testCasePath = sandbox.folderPath + "/testcase.txt";
    await fsPromises.writeFile(
      submissionCodeSnippetPath,
      submissionCodeSnippet
    );
    await fsPromises.writeFile(testCasePath, testCase);
  }

  async executeCode(
    submissionBO = {
      isChecker: false,
      userOutput: "",
      solutionOutput: "",
      testCase: "",
    }
  ) {
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
      sandbox.dockerDetails.dockerImageName,
    ].join(" ");

    console.log(runCodeCommand);
    // TODO: Set memory allocation limit

    const containerId = await this.buildCompileContainer(runCodeCommand);
    let exitCode = await this.waitForExitCode(containerId);
    exitCode = parseInt(exitCode);

    const detailedExitCode = submissionBO.isChecker
      ? checkerExitCodeMap[exitCode]
      : exitCodeMap[exitCode];

    exec(`docker rm ${containerId}`);
    const stdout = await fsPromises.readFile(
      sandbox.folderPath + "/output.txt",
      "utf-8"
    );
    const stderr = await fsPromises.readFile(
      sandbox.folderPath + "/error.txt",
      "utf-8"
    );
    exec(`rm -rf ${this.folderPath}`);
    if (submissionBO.isChecker) {
      return {
        detailedExitCode,
        userOutput: submissionBO.userOutput,
        solutionOutput: submissionBO.solutionOutput,
        testCase: submissionBO.testCase,
      };
    }
    return { detailedExitCode, stdout, stderr };
  }

  randomHash(size) {
    return encrypt.randomBytes(size).toString("hex");
  }

  async buildCompileContainer(runCodeCommand) {
    try {
      const { stdout, stderr } = await exec(runCodeCommand);
      if (stderr) throw new Error(stderr);
      return stdout;
    } catch (error) {
      if (error.stdout) throw new Error(error.stdout);
      throw new Error(error);
    }
  }

  async waitForExitCode(containerId) {
    try {
      const { stdout, stderr } = await exec(`docker wait ${containerId}`);
      if (stderr) throw new Error(stderr);
      return stdout;
    } catch (error) {
      if (error.stdout) throw new Error(error.stdout);
      throw new Error(error);
    }
  }
}

module.exports = DockerSandbox;
