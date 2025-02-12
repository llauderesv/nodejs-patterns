import { promises as fsPromise } from 'fs';
import { Logging } from './logging.js';

export class FileTemplate extends Logging {
  constructor(filePath) {
    super();
    this.filePath = filePath;
  }
  async debug(message) {
    await fsPromise.appendFile(this.filePath, `DEBUG: ${message}\n`);
  }

  async info(message) {
    await fsPromise.appendFile(this.filePath, `INFO: ${message}\n`);
  }

  async warn(message) {
    await fsPromise.appendFile(this.filePath, `WARN: ${message}\n`);
  }

  async error(message) {
    await fsPromise.appendFile(this.filePath, `ERROR: ${message}\n`);
  }
}
