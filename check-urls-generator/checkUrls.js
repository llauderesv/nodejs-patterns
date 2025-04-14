import superagent from 'superagent';

// This example is an iterator that checks the status of a list of URLs.
// It uses the async iterator protocol to yield results as they are available.
// It uses the superagent library to make HTTP requests.
// The constructor takes an array of URLs.
// The async iterator will check each URL and yield the result.
export class CheckUrls {
  constructor(urls) {
    this.urls = urls;
  }

  async *[Symbol.asyncIterator]() {
    // Iterate over each urls passed in the constructor
    for (const url of this.urls) {
      try {
        const checkResult = await superagent.head(url).redirects(2);
        yield `${url} is up, status: ${checkResult.status}`;
      } catch (err) {
        yield `${url} is down, error: ${err.message}`;
      }
    }
  }
}
