export class Database {
  constructor(dbName, connectionDetails) {}
  insert() {}
  get() {}
  getAll() {}
}

// By creating a new instance during the export, you already creating a singleton pattern in the Node.js
export const db = new Database('my-app-db', {
  url: 'localhost:5432',
  username: 'user',
  password: 'password',
});
