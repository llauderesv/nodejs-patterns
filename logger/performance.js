class CodeTimer {
  constructor(label = 'Execution Time') {
    this.label = label;
    this.startTime = null;
    this.endTime = null;
  }

  start() {
    this.startTime = performance.now();
    console.log(`${this.label} started at: ${new Date().toLocaleTimeString()}`);
  }

  stop() {
    if (this.startTime === null) {
      console.error('Timer was not started.');
      return;
    }
    this.endTime = performance.now();
    const elapsedTime = this.endTime - this.startTime;
    console.log(`${this.label} ended at: ${new Date().toLocaleTimeString()}`);
    console.log(`${this.label} took ${elapsedTime.toFixed(2)} ms.`);
  }
}

// Example usage:
const timer = new CodeTimer('My Code Block');
timer.start();

// Simulating a block of code
setTimeout(() => {
  timer.stop();
}, 2000);

timer.start();

// Simulating a block of code
setTimeout(() => {
  timer.stop();
}, 2000);