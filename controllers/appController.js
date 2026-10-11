const queries = require("../db/queries");

async function getMiniMB(req, res) {
  const messages = await queries.getAllMessages();
  console.log("Messages: ", messages);
  res.render("index", { title: "Mini Messageboard", messages: messages });
}

async function getForm(req, res) {
  res.render("form");
}

async function getMessage(req, res) {
  const msgId = req.params.id;
  const msg = await queries.getMessage(msgId);
  console.log("Message: ", msg);

  res.render("messages", { message: msg });
}

async function postMessage(req, res) {
  const author = req.body.author;
  const msg = req.body.msg;
  queries.insertMessage(author, msg, new Date());
  res.redirect("/");
}

module.exports = {
  getMiniMB,
  getForm,
  getMessage,
  postMessage,
};
