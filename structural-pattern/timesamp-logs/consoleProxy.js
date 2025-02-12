export function createConsoleProxy(console) {
  return new Proxy(console, {
    get(target, propKey) {
      if (propKey === 'log') {
        return function (...args) {
          return console.log(`${new Date().toISOString()}`, ...args);
        };
      }

      return target[propKey];
    },
  });
}
