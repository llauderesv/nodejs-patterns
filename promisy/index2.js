function delayError(milliseconds) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error(`Error after ${milliseconds}ms`));
    }, milliseconds);
  });
}
// async function playingWithErrors(throwSyncError) {
//   try {
//     if (throwSyncError) {
//       throw new Error('This is a synchronous error');
//     }
//     await delayError(1000);
//   } catch (err) {
//     console.error(`We have an error: ${err.message}`);
//   } finally {
//     console.log('Done');
//   }
// }

async function errorCaught() {
  try {
    return await delayError(1000);
  } catch (err) {
    console.error('Error caught by the async function: ' + err.message);
  }
}

errorCaught();
