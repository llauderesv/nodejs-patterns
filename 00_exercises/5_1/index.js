function delay(milliseconds = 1_500) {
  return new Promise((resolve, reject) => {
    const rnd = Math.floor(Math.random() * 50);
    setTimeout(() => {
      if (rnd <= 10) {
        reject(new Error(`Error after ${milliseconds}ms`));
      } else {
        resolve(`Yehey: ${rnd}`);
      }
    }, milliseconds);
  });
}

async function all(promises) {
  if (promises.length <= 0) {
    console.error("error: promises can't be empty");
    return;
  }

  let i = 0;
  const resolveData = [];
  try {
    for (i = 0; i < promises.length; i++) {
      const data = await promises[i]();
      resolveData.push(data);
    }
  } catch (err) {
    console.error(`error: Error in promise ${promises[i]}`);
  }

  return resolveData;
}

async function main() {
  try {
    const data = await all([delay, delay, delay]);

    console.log(data);
  } catch (err) {
    console.error(`error: ${err}`);
  }
}

main();
