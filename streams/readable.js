import { Readable } from 'stream';

const mountains = [
  { name: 'Everest', height: 8848 },
  { name: 'K2', height: 8611 },
  { name: 'Kangchengjunga', height: 8586 },
];

const mountainsStream = Readable.from(mountains);
mountainsStream.on('data', mountain => {
  console.log(`${mountain.name.padStart(14)}\t${mountain.height}m`);
});
