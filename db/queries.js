const pool = require("./pool");

async function getAllMessages() {
  const { rows } = await pool.query("SELECT * FROM messages");
  return rows;
}

async function getMessage(id) {
  const { rows } = await pool.query("SELECT * FROM messages WHERE id = $1", [
    id,
  ]);
  return rows[0];
}

async function insertMessage(username, message, added) {
  await pool.query(
    "INSERT INTO messages (username, message, added) VALUES ($1, $2, $3)",
    [username, message, added],
  );
}

module.exports = {
  getAllMessages,
  getMessage,
  insertMessage,
};
