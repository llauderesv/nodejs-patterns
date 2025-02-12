import superagent from 'superagent';

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
