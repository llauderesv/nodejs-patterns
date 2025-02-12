class Profiler {
  constructor(label) {
    this.label = label;
    this.lastTime = undefined;
  }

  start() {
    this.lastTime = process.hrtime();
  }

  end() {
    const diff = process.hrtime(this.lastTime);
    console.log(
      `Timer "${this.label}" took ${diff[0]} seconds ` + `and ${diff[1]} nanoseconds.`
    );
  }
}

const noopProfiler = {
  start() {},
  end() {},
};

// This is an example of factory class that can intercept the Profiler method during the production release
export function createProfiler(label) {
  if (process.env.NODE_ENV === 'production') {
    return noopProfiler;
  }

  return new Profiler(label);
}
