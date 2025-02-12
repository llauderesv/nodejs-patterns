import { createColorConsole } from './createColorConsole.js';

const red = createColorConsole('red');
const blue = createColorConsole('blue');
const green = createColorConsole('green');

red.log('Hello this is from red message!');
blue.log('Hello this is from blue message!');
green.log('Hello this is from green message!');
