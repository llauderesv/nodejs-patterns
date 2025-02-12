export class Logging {
  constructor(strategy) {
    this.strategy = strategy;
  }

  async load(filePath) {
    this.filePath = this.strategy.load(filePath);
  }

  log(method, ...message) {
    if (this.filePath) {
      this.strategy[method](this.filePath, ...message);
    } else {
      this.strategy[method](...message);
    }
  }

  debug(...message) {
    this.log('debug', ...message);
  }

  info(...message) {
    this.log('info', ...message);
  }

  warn(...message) {
    this.log('warn', ...message);
  }

  error(...message) {
    this.log('error', ...message);
  }
}
