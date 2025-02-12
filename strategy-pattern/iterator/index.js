import { createAlphabetIterator } from './alphabetIterator.js';

// const iterator = createAlphabetIterator();
// let iterationResult = iterator.next();
// while (!iterationResult.done) {
//   console.log(iterationResult.value);
//   iterationResult = iterator.next();
// }

for (const letter of createAlphabetIterator()) {
  console.log(letter);
}

const arrayWithDuplicates = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5];

// Removing duplicates with Array
const uniqArray = Array.from(new Set(arrayWithDuplicates));
console.log(uniqArray);
