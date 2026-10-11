const { Router } = require("express");
const {
  getMiniMB,
  getForm,
  getMessage,
  postMessage,
} = require("../controllers/appController");

const appRouter = Router();

appRouter.get("/", getMiniMB);

appRouter.get("/new", getForm);

appRouter.get("/messages/:id", getMessage);

appRouter.post("/new", postMessage);

module.exports = appRouter;
