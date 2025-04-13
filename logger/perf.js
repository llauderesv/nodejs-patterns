import { performance, PerformanceObserver } from 'node:perf_hooks';

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

// const perfObserver = new PerformanceObserver(items => {
//   items.getEntries().forEach(entry => {
//     console.log(`${entry.name}: ${entry.duration} milliseconds`);
//   });
// });
// perfObserver.observe({ entryTypes: ['measure'], buffered: true });

const endMeasure = name => performance.getEntriesByName(name, 'measure').pop();

async function main() {
  performance.mark('example-start');
  await delay(5_000);
  performance.mark('example-end');

  // performance.mark('example-start');
  await delay(5_000);
  performance.mark('example-end2');

  performance.measure('example 1', 'example-start', 'example-end');
  performance.measure('example 2', 'example-start', 'example-end2');

  let entry1 = endMeasure('example 1');
  if (entry1 === undefined) {
    console.error('No entry found!');
    return;
  }
  console.log(`${entry1.name}: ${entry1.duration} ms`);

  let entry2 = endMeasure('example 2');
  if (entry2 === undefined) {
    console.error('No entry found!');
    return;
  }
  console.log(`${entry2.name}: ${entry2.duration} ms`);
}

main();
