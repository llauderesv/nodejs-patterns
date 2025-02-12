import { Logging } from './logging.js';
import { consoleStrategy } from './consoleStrategy.js';
import { fileStrategy } from './fileStrategy.js';

function main() {
  const logging = new Logging(consoleStrategy);
  logging.info('Hello this is from red message!');
  logging.debug('Hello this is from blue message!');
  logging.warn('Hello this is from green message!');
  logging.error('Hello this is from green message!');

  const fileLogging = new Logging(fileStrategy);
  fileLogging.load('file.log');
  fileLogging.info('Hello From Info');
  fileLogging.warn('Hello From Warn');
  fileLogging.debug('Hello from Debug');

  const fileLogging2 = new Logging(fileStrategy);
  fileLogging2.load('file2.log');
  fileLogging2.info('Hello From Info');
  fileLogging2.warn('Hello From Warn');
  fileLogging2.debug('Hello from Debug');
  fileLogging2.error('Hello from Error');
}

main();
