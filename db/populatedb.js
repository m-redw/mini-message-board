#! /usr/bin/env node

const { Client } = require("pg");
const { loadEnvFile } = require("node:process");
loadEnvFile();

const SQL = `
CREATE TABLE IF NOT EXISTS messages (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  username VARCHAR ( 255 ),
  message VARCHAR ( 255 ),
  added TIMESTAMP
);

INSERT INTO messages (username, message, added)
VALUES
  ('Bryan', 'ohayo', NOW()),
  ('Odin', 'ohayo gozaimasu', NOW()),
  ('Damon', 'konbanwa', NOW());
`;

async function main() {
  console.log("seeding...");
  const client = new Client({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();
