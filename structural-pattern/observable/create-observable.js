export function createObservable(target, observer) {
  const observable = new Proxy(target, {
    set(obj, prop, value) {
      if (value != obj[prop]) {
        const prev = obj[prop];
        obj[prop] = value;
        observer({ prop, prev, curr: value }); // Notify the callback function with the changed
      }

      return true;
    },
  });

  return observable
}
