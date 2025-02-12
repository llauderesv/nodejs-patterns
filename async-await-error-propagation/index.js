function throwErr(milliseconds) {
  return new Promise((resolve, reject) => {
    setTimeout(() => reject(new Error(`Error after ${milliseconds}`)), milliseconds);
  });
}

async function playingWithErrors(throwSyncError) {
  try {
    if (throwSyncError) {
      throw new Error('This is a synchronous error');
    }
    await throwErr(1000);
  } catch (err) {
    console.error(`We have an error: ${err.message}`);
  } finally {
    console.log('Done');
  }
}

playingWithErrors(false);

async function errorNotCaught() {
  try {
    // Avoid return promise here because it will be caught by the caller
    return await throwErr(1000); 
  } catch (err) {
    console.error('Error caught by the async function: ' + err.message);
  }
}

errorNotCaught().catch(err => console.error('Error caught by the caller: ' + err.message));
