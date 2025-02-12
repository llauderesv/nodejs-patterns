import { promises as fsPromise } from 'fs';

export const fileStrategy = {
  load: filePath => filePath,
  info: async (filePath, message) => {
    await fsPromise.appendFile(filePath, `INFO: ${message}\n`);
  },
  warn: async (filePath, message) => {
    await fsPromise.appendFile(filePath, `WARN: ${message}\n`);
  },
  debug: async (filePath, message) => {
    await fsPromise.appendFile(filePath, `DEBUG: ${message}\n`);
  },
  error: async (filePath, message) => {
    await fsPromise.appendFile(filePath, `ERROR: ${message}\n`);
  },
};
