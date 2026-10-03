const express = require("express");
const app = express();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

app.get("/", (req, res) => res.send("Hello World"));
app.get("/new", (req, res) => res.send("new message form here"));

const PORT = 3000;
app.listen(PORT, (error) => {
  if (error) throw error;

  console.log(`Listening on port ${PORT}`);
});
