const connection = require("@src/config/mysql");
const { executeQuery } = require("@src/utils");

const post = {
    async insert(username, email, password, city, first_name, last_name) {
        const sql = `INSERT INTO users (username, email, password, city, first_name, last_name) VALUES ('${username}', '${email}', '${password}', '${city}', '${first_name}', '${last_name}');`;
        const result = await executeQuery(sql, connection);
        return result;
    },
};

const get = {
    async byId(id) {
        const sql = `SELECT * FROM users WHERE id = ${id}`;
        const result = await executeQuery(sql, connection);
        return result;
    },
    async byEmail(email) {
        const sql = `SELECT * FROM users WHERE email = '${email}'`;
        const result = await executeQuery(sql, connection);
        return result;
    },
};

module.exports = {
    post,
    get,
};
