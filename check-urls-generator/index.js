import { CheckUrls } from './checkUrls.js';
async function main() {
  const checkUrls = new CheckUrls([
    'https://nodejsdesignpatterns.com',
    'https://example.com',
    'https://mustbedownforsurehopefully.com',
  ]);
  
  // Manually calling next
  // checkUrls[Symbol.asyncIterator]().next();

  for await (const status of checkUrls) {
    console.log(status);
  }
}

main();
