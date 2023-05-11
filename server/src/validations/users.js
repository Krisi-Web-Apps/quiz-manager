require("dotenv").config();
require("module-alias/register");

const validator = require("../validator");

const register = (username, email, password) => {
    if (validator.username(username) === false) {
        return {
            message:
                "Username can only contain upper and lower case letters, numbers and underscores.",
        };
    }

    if (validator.email(email) === false) {
        return { message: "Invalid email address." };
    }

    if (validator.password(password) === false) {
        return { message: "Enter a strong password." };
    }

    return true;
};

module.exports = {
    register,
};
