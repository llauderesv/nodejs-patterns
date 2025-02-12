import { ColorConsole } from './ColorConsole.js';

export class GreenConsole extends ColorConsole {
  constructor() {
    super();
  }
  log(message) {
    console.log('\x1b[32m', message);
  }
}
