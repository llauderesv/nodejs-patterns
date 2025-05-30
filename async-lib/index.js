const async = require('async');
const fs = require('fs');

var obj = { dev: '/dev.json', test: '/test.json', prod: '/prod.json' };
var configs = {};

async.forEachOf(
  obj,
  (value, key, callback) => {
    fs.readFile(__dirname + value, 'utf8', (err, data) => {
      if (err) return callback(err);
      try {
        configs[key] = JSON.parse(data);
      } catch (e) {
        return callback(e);
      }
      callback();
    });
  },
  err => {
    if (err) console.error(err.message);
    console.log(JSON.stringify(configs, null, 2));
    // configs is now a map of JSON data
    // doSomethingWith(configs);
  }
);
