const Pool = require("pg").Pool;
require("dotenv").config();

const db = new Pool({
    user: process.env.SQL_USER,
    password: process.env.SQL_PASSWORD,
    host: process.env.SQL_HOST,
    database: process.env.SQL_DB,
    port: process.env.SQL_PORT
})
