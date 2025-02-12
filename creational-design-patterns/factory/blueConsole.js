import { ColorConsole } from './ColorConsole.js';

export class BlueConsole extends ColorConsole {
  constructor() {
    super();
  }
  log(message) {
    console.log('\x1b[34m', message);
  }
}
