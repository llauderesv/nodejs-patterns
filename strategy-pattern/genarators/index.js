function* fruitGenerator() {
  yield 'apple';
  yield 'banana';
  return 'orange';
}

// Invoking the generator function does not execute the function
// When you call next, the function will start executing
const fruit = fruitGenerator();
console.log(fruit.next());
console.log(fruit.next());
console.log(fruit.next());
