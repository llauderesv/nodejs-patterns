export function createAlphabetIterator() {
  return {
    *[Symbol.iterator]() {
      const A_CHAR_CODE = 65;
      const Z_CHAR_CODE = 90;
      let currCode = A_CHAR_CODE;

      while (currCode <= Z_CHAR_CODE) {
        const currChar = String.fromCodePoint(currCode);
        yield currChar;
        currCode++;
      }
    },
  };
}
