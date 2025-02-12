function* numbersFrom1To10() {
  let i = 1;
  while (i <= 10) {
    yield i;
    i++;
  }
}

const num = numbersFrom1To10();
for (const n of num) {
  console.log(n);
}
