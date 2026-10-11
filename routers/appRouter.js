const { Router } = require("express");
const {
  getMiniMB,
  getForm,
  getMessage,
  postMessage,
} = require("../controllers/appController");

const appRouter = Router();

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

appRouter.get("/", (req, res) =>
  res.render("index", { title: "Mini Messageboard", messages: messages }),
);
appRouter.get("/new", (req, res) => res.render("form"));
appRouter.get("/messages/:id", (req, res) => {
  const msgId = req.params.id;
  const msg = messages[msgId];

  res.render("messages", { message: msg });
});
appRouter.post("/new", (req, res) => {
  const author = req.body.author;
  const msg = req.body.msg;
  messages.push({ text: msg, user: author, added: new Date() });
  res.redirect("/");
});

module.exports = appRouter;
