import * as seccompData from './seccomp.json';
import * as stream from 'stream';
import Dockerode, {Container, ContainerInspectInfo, Exec, ExecCreateOptions} from 'dockerode';
import OutputStream from 'utils/stream/OutputStream';
import tar from 'tar-stream';

const boxImageName = 'ninjaprep/box';
export interface PutArchiveFile {
  content: string;
  name: string;
}

export async function putArchive(container: Container, files: PutArchiveFile[]): Promise<void> {
  for (const file of files) {
    if (file) {
      const pack = tar.pack();
      pack.entry({name: file.name}, file.content, (err) => {
        if (!err) {
          pack.finalize();
        }
      });

      const chunks: Uint8Array[] = [];
      pack.on('data', (chunk: Uint8Array) => chunks.push(chunk));
      pack.on('end', async () => {
        const buffer = Buffer.concat(chunks);
        await container.putArchive(buffer, {path: '/ninjaprep'});
      });
    }
  }
}

export async function runExec(container: Container, options: ExecCreateOptions): Promise<{outputStream: OutputStream; errorStream: OutputStream; exec: Exec; stream: stream.Duplex}> {
  const exec = await container.exec(options);
  const stream = await exec?.start({Tty: false});
  const outputStream = new OutputStream();
  const errorStream = new OutputStream();

  container.modem.demuxStream(stream, outputStream.stream, errorStream.stream);

  return {outputStream, errorStream, exec, stream};
}

export async function getArchive(filePath: string, container?: Container): Promise<string> {
  if (!container) return '';
  const stream = await container.getArchive({path: filePath});
  const extract = tar.extract();
  const buffer: Buffer[] = [];

  return new Promise((resolve) => {
    extract.on('entry', (header, stream) => {
      stream.on('data', (chunk) => buffer.push(chunk));
      stream.on('end', () => {
        resolve(Buffer.concat(buffer).toString('utf-8'));
      });
      stream.resume();
    });

    stream.pipe(extract);
  });
}
export interface CreateContainerInput {
  dockerode: Dockerode;
  command?: string;
  autoRemove?: boolean;
  user: string;
  networkDisabled?: boolean;
  hasSeccomp?: boolean;
}

interface DockerLanguageCommands {
  fileName: string;
  runCommand: string;
  compileCommand: string;
  runFile: string;
}

export function tryParseJSON(text: string): any {
  try {
    return JSON.parse(text);
  } catch {}
}

export const languageSelection: {[key: string]: DockerLanguageCommands} = {
  java: {
    fileName: 'File.java',
    runCommand: 'java',
    runFile: 'File',
    compileCommand: 'javac File.java',
  },
  python: {
    fileName: 'File.py',
    runCommand: 'python3',
    runFile: 'File.py',
    compileCommand: ':' /* Bash No-op command*/,
  },
  cpp: {
    fileName: 'File.cpp',
    runCommand: './File',
    runFile: '',
    compileCommand: 'g++ File.cpp -o File',
  },
};

export async function createContainer(input: CreateContainerInput): Promise<Dockerode.Container> {
  const dockerode = input.dockerode;
  const securityOpts = ['no-new-privileges'];
  if (input.hasSeccomp) {
    /**
     *
     * @seccompString - Eligible syscalls needed to run user code in docker container
     *
     * (Ex. ls, mkdir, cat, chroot)
     */
    const seccompString = JSON.stringify(seccompData);
    securityOpts.push(`seccomp:${seccompString}`);
  }
  const container = await dockerode.createContainer({
    Image: boxImageName,
    WorkingDir: '/ninjaprep',
    Cmd: ['/bin/bash'],
    Tty: true /* Keep Docker container up for exec commands */,
    User: input.user,
    HostConfig: {
      Binds: ['/var/run/docker.sock:/var/run/docker.sock'],
      AutoRemove: input.autoRemove ?? true,
      SecurityOpt: securityOpts,
    },
    NetworkDisabled: input.networkDisabled,
  });

  return container;
}

export async function findAvailableContainer(input: CreateContainerInput): Promise<Dockerode.Container> {
  const listContainers = await input.dockerode.listContainers({filters: {ancestor: [boxImageName]}});
  const inspectPromises: Promise<ContainerInspectInfo>[] = [];

  listContainers.map((container) => {
    const dockerodeContainer = input.dockerode.getContainer(container.Id);
    inspectPromises.push(dockerodeContainer.inspect());
  });

  const inspectData = await Promise.all(inspectPromises);
  const validContainerData = inspectData.find((data) => {
    return data.ExecIDs == null;
  });

  /*
  Use a running container else start a new container
  */
  if (validContainerData) {
    const container = input.dockerode.getContainer(validContainerData?.Id);
    if (!validContainerData.State.Running) {
      await container.start();
    }
    return container;
  } else {
    const container = await createContainer(input);
    await container.start();
    return container;
  }
}
