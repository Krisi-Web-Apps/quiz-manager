const userValidations = require("@src/validations/users");
const userServices = require("@src/services/users");
const { passwordHash } = require("@src/utils");

const post = {
    async register(req, res) {
        const { password, ...others } = req.body;
        
        const validationsResult = userValidations.register(others.username, others.email, password);

        if (validationsResult !== true) {
            res.status(400).send(validationsResult);
            return;
        }

        const isExistsUserResult = await userServices.get.byEmail(others.email);

        if (isExistsUserResult.length > 0) {
            res.status(409).send({ message: "Dublicate email address." });
            return;
        }

        const hash = passwordHash(password);

        await userServices.post.insert(others.username, others.email, hash, others.city, others.first_name, others.last_name);

        const fetchedUserResult = await userServices.get.byEmail(others.email);
        
        delete fetchedUserResult[0].password;

        res.status(201).send(fetchedUserResult[0]);
    }
}

module.exports = {
    post,
}
