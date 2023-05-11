const get = {
    home(req, res) {
        res.send({ message: "Server Works!" });
    },
    about(req, res) {
        res.send({ message: "This is web application about quiz management." });
    },
};

module.exports = {
    get,
};
