require("dotenv").config();
require("module-alias/register");

const colors = require("colors");
const cors = require("cors");
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

// common middlewares
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// routers
const commonRouter = require("@src/routers/common");
const usersRouter = require("@src/routers/users");

// costom middlewares
const { errorHandler } = require("./config/middlewares");

app.use("/", commonRouter);
app.use("/users", usersRouter);

app.use(errorHandler);

const PORT = process.env.PORT;
const env = process.env.NODE_ENV;

app.listen(PORT, () => {
  console.log(
    `Server started on port: ${colors.green(PORT)} in ${colors.green(env)}`
  );
});

module.exports = app;
