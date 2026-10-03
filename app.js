const express = require("express");
const path = require("node:path");
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

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.get("/", (req, res) =>
  res.render("index", { title: "Mini Messageboard", messages: messages }),
);
app.get("/new", (req, res) => res.send("new message form here"));

const PORT = 3000;
app.listen(PORT, (error) => {
  if (error) throw error;

  console.log(`Listening on port ${PORT}`);
});
