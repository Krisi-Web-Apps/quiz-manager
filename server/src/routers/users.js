const router = require("express").Router();
const usersController = require("@src/controllers/users");

router.post("/register", usersController.post.register);

module.exports = router;
