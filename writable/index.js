import { Writable } from 'stream';
import { promises as fs } from 'fs';
import { dirname, join } from 'path';
import mkdirp from 'mkdirp-promise';

export class ToFileStream extends Writable {
  constructor(options) {
    super({ ...options, objectMode: true });
  }

  _write(chunk, encoding, cb) {
    mkdirp(dirname(chunk.path))
      .then(() => fs.writeFile(chunk.path, chunk.content))
      .then(() => cb())
      .catch(cb);
  }
}

const tfs = new ToFileStream();

tfs.write({ path: join('files', 'file1.txt'), content: 'Hello' });
tfs.write({ path: join('files', 'file2.txt'), content: 'Node.js' });
tfs.write({ path: join('files', 'file3.txt'), content: 'streams' });
tfs.end(() => console.log('All files created'));
