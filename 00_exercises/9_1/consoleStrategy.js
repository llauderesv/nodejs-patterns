export const consoleStrategy = {
  debug: (...message) => console.debug('[DEBUG]', ...message),
  info: (...message) => console.info('[INFO]', ...message),
  error: (...message) => console.error('[ERROR]', ...message),
  warn: (...message) => console.warn('[WARN]', ...message),
};
