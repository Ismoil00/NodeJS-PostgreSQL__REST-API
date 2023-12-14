const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "NodeJS_Students",
  password: "ismoil",
  port: 5432,
});

module.exports = pool
