const express = require("express");
const path = require("node:path");
const appRouter = require("./routers/appRouter");
const app = express();

app.use(express.urlencoded({ extended: true }));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use("/", appRouter);

const PORT = 3000;
app.listen(PORT, (error) => {
  if (error) throw error;

  console.log(`Listening on port ${PORT}`);
});
