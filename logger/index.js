class Logger {
  startTime;
  endTime;
  constructor() {}
  start() {
    this.startTime = performance.now();
  }
  end() {
    if (this.startTime === null) {
      console.error('Timer was not started.');
      return 0;
    }
    const end = performance.now() - this.startTime;
    this.startTime = null;
    return end;
  }
}

function createLogger() {
  return new Logger();
}

const logger = createLogger();

function delay() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('Hello, World!');
    }, 5_000);
  });
}

async function main() {
  try {
    logger.start();
    await delay();
    console.log(logger.end().toFixed(2));

    await delay();
    console.log(logger.end().toFixed(2));
  } catch (err) {}
}

main();
