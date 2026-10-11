async function getMiniMB(req, res) {
  res.render("index", { title: "Mini Messageboard", messages: messages });
}

async function getForm(req, res) {
  res.render("form");
}

async function getMessage(req, res) {
  const msgId = req.params.id;
  const msg = messages[msgId];

  res.render("messages", { message: msg });
}

async function postMessage(req, res) {
  const author = req.body.author;
  const msg = req.body.msg;
  messages.push({ text: msg, user: author, added: new Date() });
  res.redirect("/");
}

module.exports = {
  getMiniMB,
  getForm,
  getMessage,
  postMessage,
};
