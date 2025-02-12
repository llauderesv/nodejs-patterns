var displayError = function (e) { return console.log("Error: ".concat(e)); };
function doSomething() {
    throw new Error('message');
}
function assertIsError(e) {
    if (!(e instanceof Error))
        throw new Error('e is not an Error');
}
try {
    doSomething();
}
catch (e) {
    // All thrown errors must be Error subtypes. Do not handle
    // other possible values unless you know they are thrown.
    assertIsError(e);
    displayError(e.message);
    // or rethrow:
    throw e;
}
// The service is simple enough where I can generate more money into it.
