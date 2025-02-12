import { ConsoleTemplate } from './consoleTemplate.js';
import { FileTemplate } from './fileTemplate.js';

function main() {
  const log = new ConsoleTemplate();
  log.debug('This is a debug message');
  log.info('This is an info message');
  log.warn('This is a warning message');
  log.error('This is an error message');

  const fileLog = new FileTemplate('file.log');
  fileLog.debug('This is a debug message');
  fileLog.info('This is an info message');
  fileLog.warn('This is a warning message');
  fileLog.error('This is an error message');

  const fileLog2 = new FileTemplate('file2.log');
  fileLog2.debug('This is a debug message');
  fileLog2.info('This is an info message');
  fileLog2.warn('This is a warning message');
  fileLog2.error('This is an error message');
}

main();
