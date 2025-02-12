import { db } from './db.js';

async function main() {
  db.get(); // perform get
  db.getAll(); // perform get all
  db.insert(); // insert
}

main().catch(console.error);
