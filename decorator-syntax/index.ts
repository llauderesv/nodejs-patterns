function Log(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;

  descriptor.value = function (...args: any[]) {
    console.log(`[LOG] Method: ${propertyKey}, Args: ${JSON.stringify(args)}`);
    const result = originalMethod.apply(this, args);
    console.log(`[LOG] Result: ${JSON.stringify(result)}`);
    return result;
  };

  return descriptor;
}

class Example {
  @Log
  sum(a: number, b: number): number {
    return a + b;
  }
}

const example = new Example();
example.sum(2, 3);
example.sum(5, 5);
