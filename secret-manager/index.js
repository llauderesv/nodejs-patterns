const handler = {
  get(target, prop, receiver) {
    if (prop === 'message1') {
      return 'world';
    }
    // @ts-ignore
    return Reflect.get(...arguments);
  },
};

const target = {
  message1: 'hello',
  message2: 'everyone',
};

const proxy = new Proxy(target, handler);

console.log(proxy.message1); // world
console.log(proxy.message2); // world

const input = {
  postalCode: 'ABC 123',
};

function proxyValidation(obj) {
  return new Proxy(obj, {
    get(target, prop, receiver) {
      if (prop === 'postalCode') {
        return obj[prop].replace(/\s+/gi, '');
      }
      // @ts-ignore
      return Reflect.get(...arguments);
    },
    set(target, prop, value) {
      if (prop === 'postalCode') {
        value = value.replace(/\s+/gi, '');
        obj[prop] = value;
        return true;
      }
      // @ts-ignore
      return Reflect.set(...arguments);
    },
  });
}

const output = proxyValidation(input);
output.postalCode = 'ECD 123';
console.log(output.postalCode); // ABC123

class SecretManager {
  #secret;
  constructor(secret) {
    this.#secret = secret;
  }

  get secret() {
    return this.#secret.replace(/\d+/gi, '[REDACTED]');
  }
}

const aSecret = new SecretManager('123456');
console.log(aSecret.secret);
