import { BlueConsole } from './blueConsole.js';
import { GreenConsole } from './greenConsole.js';
import { RedConsole } from './redConsole.js';

export function createColorConsole(color) {
  if (color === 'green') {
    return new GreenConsole();
  } else if (color === 'blue') {
    return new BlueConsole();
  } else if (color === 'red') {
    return new RedConsole();
  } else {
    throw new Error(`error: unknown color ${color}`);
  }
}
