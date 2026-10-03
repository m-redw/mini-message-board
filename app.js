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

app.use(express.urlencoded({ extended: true }));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.get("/", (req, res) =>
  res.render("index", { title: "Mini Messageboard", messages: messages }),
);
app.get("/new", (req, res) => res.render("form"));
app.post("/new", (req, res) => {
  const author = req.body.author;
  const msg = req.body.msg;
  messages.push({ text: msg, user: author, added: new Date() });
  res.redirect("/");
});

const PORT = 3000;
app.listen(PORT, (error) => {
  if (error) throw error;

  console.log(`Listening on port ${PORT}`);
});
