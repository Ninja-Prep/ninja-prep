import Dockerode, {Container} from 'dockerode';
import OutputStream from 'utils/stream/OutputStream';
import fs from 'fs';
import tar from 'tar-stream';

export interface PutArchiveFile {
  content: string;
  name: string;
}

async function putArchive(
  container: Container,
  files: PutArchiveFile[],
): Promise<void> {
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

export async function getArchive(
  filePath: string,
  container: Container,
): Promise<string> {
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
  command: string;
  volumeName: string;
  files?: PutArchiveFile[];
  autoRemove?: boolean;
  user: string;
  networkDisabled?: boolean;
  hasSeccomp?: boolean;
}

interface DockerLanguageCommands {
  fileName: string;
  runCommand: string;
  compileCommand: string;
}

export function tryParseJSON(text: string): any {
  try {
    return JSON.parse(text);
  } catch {}
}

export const languageSelection: {[key: string]: DockerLanguageCommands} = {
  java: {
    fileName: 'File.java',
    runCommand: 'java File.java',
    compileCommand: 'javac File.java',
  },
  python: {
    fileName: 'File.py',
    runCommand: 'python3 File.py',
    compileCommand: 'python -m py_compile File.py',
  },
};

export async function createContainer(input: CreateContainerInput): Promise<{
  container: Dockerode.Container;
  outputStream: OutputStream;
  errorStream: OutputStream;
}> {
  const dockerode = input.dockerode;
  const securityOpts = ['no-new-privileges'];
  if (input.hasSeccomp) {
    const seccompString = await getSeccompProfile();
    securityOpts.push(`seccomp:${seccompString}`);
  }
  const container = await dockerode.createContainer({
    Image: 'ninjaprep/box',
    WorkingDir: '/ninjaprep',
    Cmd: ['/bin/sh', '-c', input.command],
    User: input.user,
    HostConfig: {
      Binds: [`${input.volumeName}:/ninjaprep`],
      AutoRemove: input.autoRemove ?? true,
      SecurityOpt: securityOpts,
    },
    NetworkDisabled: input.networkDisabled,
  });

  if (input.files) await putArchive(container, input.files);

  const outputStream = new OutputStream();
  const errorStream = new OutputStream();

  const stream = await container.attach({
    stream: true,
    stdout: true,
    stderr: true,
  });

  await container.modem.demuxStream(
    stream,
    outputStream.stream,
    errorStream.stream,
  );

  return {container, outputStream, errorStream};
}

function getSeccompProfile(): Promise<string> {
  return new Promise((resolve, reject) => {
    fs.readFile(__dirname + '/seccomp.json', (err, data) => {
      if (err) {
        reject(err);
      }
      resolve(data.toString('utf-8'));
    });
  });
}
