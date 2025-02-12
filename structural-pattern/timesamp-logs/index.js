import console from 'node:console';
import { createConsoleProxy } from './consoleProxy.js';

const consoleProxy = createConsoleProxy(console);

consoleProxy.log('Hello World');
consoleProxy.info('Hello World');
