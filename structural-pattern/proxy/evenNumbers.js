const evenNumbers = new Proxy([], {
  get: (target, index) => Number(index) * 2,
  has: (target, number) => Number(number) % 2 === 0,
});

console.log(2 in evenNumbers); // true
console.log(5 in evenNumbers); // false
console.log(evenNumbers[19]); // 14
