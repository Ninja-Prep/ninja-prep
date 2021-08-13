import {
  CreateContainerInput,
  PutArchiveFile,
  createContainer,
  getArchive,
  languageSelection,
  tryParseJSON,
} from './utils';
import {ProblemSubmissionInput} from '@ninjaprep/types/ProblemSubmission';
import {v4 as uuid} from 'uuid';
import Dockerode from 'dockerode';
import OutputStream from 'utils/stream/OutputStream';

const checkerCodeFileName = 'Checker.java';
const validateTestCaseName = 'ValidateTestCase.py';

interface DockerStreamsOutput {
  outputStream: OutputStream;
  errorStream: OutputStream;
  exitCode: number;
}

export interface DockerSubmissionResult {
  testCase: string;
  runtimeExitCode: number;
  verdictExitCode: number;
  userStdout: string;
  userStderr: string;
  userOutput: string;
  expectedOutput: string;
}

interface ExecuteCodeOutput {
  stderr: string;
  exitCode: number;
  testCaseResults: DockerSubmissionResult[];
}

export class DockerService {
  private dockerode: Dockerode;
  private volumeName: string;

  constructor() {
    this.dockerode = new Dockerode();
    this.volumeName = 'ninja-prep-' + uuid();
  }

  public cleanDockerode(): void {
    this.dockerode.pruneVolumes();
  }

  public async compileCode(
    input: ProblemSubmissionInput,
  ): Promise<DockerStreamsOutput> {
    const languageCommands = languageSelection[input.programmingLanguage];

    const putArchiveFiles: PutArchiveFile[] = [];

    const userCodeFile: PutArchiveFile = {
      name: languageCommands.fileName,
      content: input.snippets.userCode,
    };
    putArchiveFiles.push(userCodeFile);

    const checkerCodeFile: PutArchiveFile = {
      name: checkerCodeFileName,
      content: input.snippets.checkerCode,
    };
    putArchiveFiles.push(checkerCodeFile);

    const validateTestCaseFile: PutArchiveFile = {
      name: validateTestCaseName,
      content: input.snippets.validateTestCaseCode,
    };
    putArchiveFiles.push(validateTestCaseFile);

    const putArchiveTestCases = input.testCases.map(
      (testCase, index): PutArchiveFile => {
        return {
          name: `TestCase${index + 1}.txt`,
          content: testCase,
        };
      },
    );

    putArchiveFiles.push(...putArchiveTestCases);

    const containerInput: CreateContainerInput = {
      dockerode: this.dockerode,
      volumeName: this.volumeName,
      command: `${languageCommands.compileCommand} && javac ${checkerCodeFileName}`,
      files: putArchiveFiles,
      user: 'root',
    };
    const {container, outputStream, errorStream} = await createContainer(
      containerInput,
    );
    await container.start();
    const exitCode = (await container.wait()).StatusCode;
    return {outputStream, errorStream, exitCode};
  }

  public async executeCode(
    input: ProblemSubmissionInput,
  ): Promise<ExecuteCodeOutput> {
    const languageCommands = languageSelection[input.programmingLanguage];

    const containerInput: CreateContainerInput = {
      dockerode: this.dockerode,
      volumeName: this.volumeName,
      command: `python3 run_code.py ${languageCommands.runCommand}`,
      user: 'ninjaprep',
      autoRemove: false,
      networkDisabled: true,
      hasSeccomp: true,
    };
    const {container, errorStream} = await createContainer(containerInput);

    await container.start();
    const exitCode = (await container.wait()).StatusCode;
    const outputFile = await getArchive('/ninjaprep/output.json', container);
    const testCaseResults = tryParseJSON(outputFile) || [];
    container.remove();
    this.cleanDockerode();
    return {testCaseResults, exitCode, stderr: errorStream.text};
  }
}

export default DockerService;
