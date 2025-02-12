import { createAlphabetIterator } from './alphabet.js';

const alphabet = createAlphabetIterator();
for (const letter of alphabet) {
  console.log(letter);
}
