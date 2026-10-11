const queries = require("../db/queries");
const { body, validationResult, matchedData } = require("express-validator");

const validateUser = [
  body("author")
    .trim()
    .isAscii()
    .withMessage("Username must be ASCII characters.")
    .isLength({ min: 1, max: 15 })
    .withMessage("Username must be 1-15 characters long.")
    .escape(),
  body("msg")
    .trim()
    .isAscii()
    .withMessage("Message must be ASCII characters.")
    .isLength({ min: 1, max: 100 })
    .withMessage("Message must be 1-100 characters long.")
    .escape(),
];

async function getMiniMB(req, res) {
  const messages = await queries.getAllMessages();
  console.log("Messages: ", messages);
  res.render("index", { title: "Mini Messageboard", messages: messages });
}

async function getForm(req, res) {
  res.render("form", { author: "", msg: "" });
}

async function getMessage(req, res) {
  const msgId = req.params.id;
  const msg = await queries.getMessage(msgId);
  console.log("Message: ", msg);

  res.render("messages", { message: msg });
}

postMessage = [
  validateUser,
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).render("form", {
        author: req.body.author,
        msg: req.body.msg,
        errors: errors.array(),
      });
    }
    const { author, msg } = matchedData(req);
    queries.insertMessage(author, msg, new Date());
    res.redirect("/");
  },
];

module.exports = {
  getMiniMB,
  getForm,
  getMessage,
  postMessage,
};
