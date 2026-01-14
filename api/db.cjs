
const sqlite3 = require('sqlite3').verbose();
const { open } = require('sqlite');

let dbPromise = open({
  filename: process.env.SQLITE_DB_PATH || './database.sqlite',
  driver: sqlite3.Database
});

module.exports = dbPromise;
