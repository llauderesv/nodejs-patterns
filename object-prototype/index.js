// Avoid!
// Iterating objects with for (... in ...) is error prone.
// It will include enumerable properties from the prototype chain.
// Instead you can use Object.keys to get the Object own properties of the object
var Person = (function () {
  function Person() {
    this.name = 'Vince';
  }
  Person.prototype.getName = function () {
    return this.name;
  };
  return Person;
})();

var person = new Person();
for (var key in person) {
  console.log(key);
}
