import {CreateContainerInput, PutArchiveFile, createContainer, getArchive, languageSelection, tryParseJSON} from './utils';
import {ProblemSubmissionInput} from '@ninjaprep/types/ProblemSubmission';
import {v4 as uuid} from 'uuid';
import Dockerode, {ExecCreateOptions} from 'dockerode';
import OutputStream from 'utils/stream/OutputStream';

interface DockerStreamsOutput {
  outputStream: OutputStream;
  errorStream: OutputStream;
  exitCode: number;
}

/**
 * Interface for object returned after running user code against test cases inside docker container
 *
 * @testCase - Plain test case the user code was run against
 * @runtimeExitCode - Exit code when running user code against testCase
 * @verdictExitCode - Exit code when running checker file to judge user submission
 * @userStdout - Stdout if the user wrote any stdout in their file (ex. System.out.println("Inside loop"))
 * @userStderr - Stderr to see where any runtime error messaging
 * @userOutput - User output when run against test case
 * @expectedOutput - Correct answer to problem run against testcase
 */
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

const checkerCodeFileName = 'Checker.java';
const validateTestCaseName = 'ValidateTestCase.py';
const dockerRunTimeout = 7000;

export class DockerService {
  private dockerode: Dockerode;
  private volumeName: string;
  private container?: Dockerode.Container;

  constructor() {
    this.dockerode = new Dockerode({timeout: dockerRunTimeout});
    this.volumeName = 'ninja-prep-' + uuid();
  }

  public cleanDockerode(): void {
    try {
      this.container?.kill();
    } catch (err) {}
    this.dockerode.pruneVolumes();
  }

  public async compileCode(input: ProblemSubmissionInput): Promise<DockerStreamsOutput> {
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

    const putArchiveTestCases = input.testCases.map((testCase, index): PutArchiveFile => {
      return {
        name: `TestCase${index + 1}.txt`,
        content: testCase,
      };
    });

    putArchiveFiles.push(...putArchiveTestCases);

    const containerInput: CreateContainerInput = {
      dockerode: this.dockerode,
      volumeName: this.volumeName,
      files: putArchiveFiles,
      user: 'root',
      autoRemove: true,
      hasSeccomp: true,
    };

    const {container, outputStream, errorStream} = await createContainer(containerInput);

    this.container = container;
    await this.container.start();
    const options: ExecCreateOptions = {
      Cmd: ['bash', '-c', `${languageCommands.compileCommand} && javac ${checkerCodeFileName}`],
      User: 'root',
      AttachStdout: true,
      AttachStderr: true,
    };

    const exec = await this.container?.exec(options);
    const stream = await exec?.start({Tty: false});
    container.modem.demuxStream(stream, outputStream.stream, errorStream.stream);

    return new Promise((resolve, reject) => {
      stream.on('end', async () => {
        const exitCode = (await exec.inspect()).ExitCode ?? 1;
        if (exitCode) this.cleanDockerode();
        resolve({outputStream, errorStream, exitCode: exitCode ?? 1});
      });
      stream.on('error', (err) => {
        reject(err);
      });
    });
  }

  public async executeCode(input: ProblemSubmissionInput): Promise<ExecuteCodeOutput> {
    if (!this.container) {
      throw new Error('Internal Error.  Expected a running container to be defined');
    }

    const languageCommands = languageSelection[input.programmingLanguage];

    const options: ExecCreateOptions = {
      Cmd: ['bash', '-c', `python3 run_code.py ${languageCommands.runCommand}`],
      User: 'ninjaprep',

      AttachStdout: true,
      AttachStderr: true,
    };

    const exec = await this.container.exec(options);
    const stream = await exec?.start({Tty: false});
    const outputStream = new OutputStream();
    const errorStream = new OutputStream();

    this.container?.modem.demuxStream(stream, outputStream.stream, errorStream.stream);

    return new Promise((resolve, reject) => {
      stream.on('end', async () => {
        const exitCode = (await exec.inspect()).ExitCode ?? 1;

        const outputFile = await getArchive('/ninjaprep/output.json', this.container);
        const testCaseResults = tryParseJSON(outputFile) || [];
        this.cleanDockerode();
        resolve({testCaseResults, exitCode, stderr: errorStream.text});
      });
      stream.on('error', (err) => {
        reject(err);
      });
    });
  }
}

export default DockerService;
