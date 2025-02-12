const displayError = (e: string) => console.log(`Error: ${e}`);

function doSomething() {
  throw new Error('message');
}

function assertIsError(e: unknown): asserts e is Error {
  if (!(e instanceof Error)) throw new Error('e is not an Error');
}

try {
  doSomething();
} catch (e: unknown) {
  // All thrown errors must be Error subtypes. Do not handle
  // other possible values unless you know they are thrown.
  assertIsError(e);
  displayError(e.message);
  // or rethrow:
  throw e;
}

// The service is simple enough where I can generate more money into it.