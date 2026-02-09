// test-db.js 

// to check if the database connection is working fine and the database is accessible with the given credentials in .env file
import mysql from "mysql2/promise";
import dotenv from "dotenv";

dotenv.config();

const conn = await mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT
});

const [rows] = await conn.query("SHOW DATABASES;");
console.log(rows.map(r => r.Database));

await conn.end();


// test-app.js
