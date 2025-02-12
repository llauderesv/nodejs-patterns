function greeting(greeting, name) {
  console.log(`${greeting}, ${name}`);
}

const sayHello = greeting.bind(null, 'Hello');
sayHello('Vince');