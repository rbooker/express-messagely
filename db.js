/** Database connection for messagely. */


const { Client } = require("pg");
const { DB_URI } = require("./config");

const client = new Client({
    host: 'localhost',
    user: 'ryanb',
    password: 'yamahacs5',
    database: DB_URI
  });

client.connect();


module.exports = client;
