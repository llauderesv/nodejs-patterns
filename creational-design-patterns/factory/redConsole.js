import { ColorConsole } from './ColorConsole.js';

export class RedConsole extends ColorConsole {
  constructor() {
    super();
  }

  log(message) {
    console.log('\x1b[31m', message);
  }
}
