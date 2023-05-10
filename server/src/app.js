require("dotenv").config();
require('module-alias/register');
const colors = require("colors");
const cors = require("cors");
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const commonRouter = require("@src/routers/common");
const usersRouter = require("@src/routers/users");

app.use("/", commonRouter);
app.use("/users", usersRouter);

const PORT = process.env.PORT;
const env = process.env.NODE_ENV;

app.listen(PORT, () => {
    console.log(`Server started on port: ${colors.green(PORT)} in ${colors.green(env)}`);
});
