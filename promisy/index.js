const { readFile } = require('fs');

const readFilePromise = () => {
  return new Promise((resolve, reject) => {
    readFile('./dev.json', 'utf8', (err, data) => {
      if (err) {
        return reject(err);
      }

      resolve(data);
    });
  });
};

async function main() {
  try {
    const data = await readFilePromise();

    console.log(`Data we received: ${data}`);
  } catch (err) {
    console.error(`Something went wrong: ${err}`);
  }
}

main();
