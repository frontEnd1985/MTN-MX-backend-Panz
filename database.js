const { createPool } = require("mysql");

const pool = createPool({
  port: process.env.DB_PORT,
  user: process.env.MYSQL_USER,
  host: process.env.DB_HOST,
  password: process.env.DB_PASS,
  database: process.env.MYSQL_DB,
  connectionLimit: 10,
});

const pool_57 = createPool({
  port: process.env.DB_PORT,
  user: process.env.MYSQL_USER,
  host: process.env.DB_HOST_57,
  password: process.env.DB_PASS_57,
  database: process.env.MYSQL_DB_57,
  connectionLimit: 10,
});

module.exports = { pool, pool_57 };
