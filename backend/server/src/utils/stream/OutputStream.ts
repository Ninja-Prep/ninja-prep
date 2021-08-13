import Stream from 'stream';
import StringDecoder from 'string_decoder';

class OutputStream {
  private outputStream: Stream.Writable;
  private outputString = '';

  constructor() {
    this.outputStream = new Stream.Writable();

    this.outputStream._write = (doc, encoding, next) => {
      const decoder = new StringDecoder.StringDecoder('utf8');
      const result = decoder.write(doc);
      this.writeToOutput(result);
      next();
    };
  }

  get stream(): Stream.Writable {
    return this.outputStream;
  }

  writeToOutput(chunk: string): void {
    this.outputString = this.outputString.concat(chunk);
  }

  get text(): string {
    return this.outputString;
  }

  endStream(): void {
    this.stream.end();
  }
}

export default OutputStream;
