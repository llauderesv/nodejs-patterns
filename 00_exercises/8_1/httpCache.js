const cache = new Map();

const fetchWithCache = new Proxy(fetch, {
  async apply(target, thisArg, args) {
    const url = args[0];
    const options = args[1] || {};

    // Check if the request is a GET (caching non-GET requests is usually not ideal)
    if (options.method && options.method !== 'GET') {
      return Reflect.apply(target, thisArg, args);
    }

    // Return cached response if available
    if (cache.has(url)) {
      console.log(`Serving from cache: ${url}`);
      return cache.get(url);
    }

    // Make the network request
    console.log(`Fetching from network: ${url}`);
    const response = await Reflect.apply(target, thisArg, args);

    // Store the response in cache
    if (response.ok) {
      cache.set(url, response.clone());
    }

    return response;
  },
});

// Usage
(async () => {
  const url = 'https://jsonplaceholder.typicode.com/todos/1';

  console.time('fetch');
  // First request - Fetches from network
  const response1 = await fetchWithCache(url);
  console.log(await response1.json());
  console.timeEnd('fetch');

  console.time('fetchWithCache');
  // Second request - Serves from cache
  const response2 = await fetchWithCache(url);
  console.log(await response2.json());
  console.timeEnd('fetchWithCache');
})();
