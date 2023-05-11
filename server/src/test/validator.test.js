require("colors");
const { describe, expect, test } = require("@jest/globals");

const validator = require("@src/validator");

describe(`username validations - ${"10 points".green}`, () => {
    test(`it returns password is valid - ${"5 points".green}`, () => {
        const passwordString1 = "ASDasd123+";
        const passwordString2 = "++asddSDASD846&&$$";
        const passwordString3 = "shsjjdkNSDJKjs+6adsd6ads";

        expect(validator.password(passwordString1)).toBe(true);
        expect(validator.password(passwordString2)).toBe(true);
        expect(validator.password(passwordString3)).toBe(true);
    });
    test(`it returns password is invalid - ${"5 points".green}`, () => {
        const passwordString1 = "ASDasd";
        const passwordString2 = "asddSDASD846";
        const passwordString3 = "shsjjsadsdads";
        const passwordString4 = "123456";

        expect(validator.password(passwordString1)).toBe(false);
        expect(validator.password(passwordString2)).toBe(false);
        expect(validator.password(passwordString3)).toBe(false);
        expect(validator.password(passwordString4)).toBe(false);
    });
});

describe(`email validations - ${"10 points".green}`, () => {
    test(`it returns return email is valid - ${"5 points".green}`, () => {
        const emailString2 = "maria_pesheva@gmail.com";
        const emailString1 = "peter_petrov@gmail.com";
        const emailString3 = "admin.admonov@gmail.com";

        expect(validator.email(emailString1)).toBe(true);
        expect(validator.email(emailString2)).toBe(true);
        expect(validator.email(emailString3)).toBe(true);
    });
    test(`it returns return email is invalid - ${"5 points".green}`, () => {
        const emailString1 = "peter_petrov@";
        const emailString2 = "maria_pesheva@gmail";
        const emailString3 = "admin.admonov-@gmail.com.";

        expect(validator.email(emailString1)).toBe(false);
        expect(validator.email(emailString2)).toBe(false);
        expect(validator.email(emailString3)).toBe(false);
    });
});

describe(`password validations - ${"10 points".green}`, () => {
    test(`it returns username is valid - ${"5 points"}`, () => {
        const usernameString1 = "peter_petrov";
        const usernameString2 = "maria_pesheva";
        const usernameString3 = "AdminAdmonov";

        expect(validator.username(usernameString1)).toBe(true);
        expect(validator.username(usernameString2)).toBe(true);
        expect(validator.username(usernameString3)).toBe(true);
    });
    test(`it returns username is invalid - ${"5 points".green}`, () => {
        const passwordString1 = "peter_petrov1";
        const passwordString2 = "maria-pesheva";
        const passwordString3 = "AdminAdmonov+";
        const passwordString4 = "кирилица";

        expect(validator.password(passwordString1)).toBe(false);
        expect(validator.password(passwordString2)).toBe(false);
        expect(validator.password(passwordString3)).toBe(false);
        expect(validator.password(passwordString4)).toBe(false);
    });
});
