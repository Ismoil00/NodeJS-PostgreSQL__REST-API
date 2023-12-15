const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "NodeJS_Students",
  password: "ismoil0101",
  port: 5432,
});

module.exports = pool
