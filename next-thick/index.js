import fs from 'fs';

fs.readFile('./package.json', 'utf8', (err, data) => {
  if (err) return console.error(`Something went wrong: ${err}`);
  console.log(`Data we received: ${data}`);
});

/**
 * This will executed first before the fs.readFile
 */
process.nextTick(() => {
  console.log('Hello World');
});
