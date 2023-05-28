require("colors");
const { describe, expect, test } = require("@jest/globals");

const userValidations = require("@src/validations/users");

describe("register validations", () => {
    test(`it returns register data is valid - ${"5 points".green}`, () => {
        const username1 = "KrisiKostadinov";
        const email1 = "krisi.199898@gmail.com";
        const password1 = "lQTd)IN7py:`i>DsW0+";

        const username2 = "krisi_kostadinov";
        const email2 = "krisi-kostadinov@gmail.com";
        const password2 = "ACg)L}5OsS~HXc@anCM<";

        const username3 = "krisikostadinov";
        const email3 = "krisikostadinov@gmail.com";
        const password3 = "[jNL><@^*lKXOuUHWZ>_4";

        expect(userValidations.register(username1, email1, password1)).toBe(true);
        expect(userValidations.register(username2, email2, password2)).toBe(true);
        expect(userValidations.register(username3, email3, password3)).toBe(true);
    });
});
