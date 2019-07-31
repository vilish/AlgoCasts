const T = require('./index');

const digitsOnly = T.digitsOnly;

describe("string have only digits", () => {

    test("digitsOnly method is defined", () => {

        expect(typeof digitsOnly).toEqual("function");
    });

    test("string with digits only should pass the tst", () => {

        expect(digitsOnly("123654")).toBeTruthy();

    });

    test("string with digits and chars - should return false", () => {
        expect(digitsOnly("aaa123654")).toBeFalsy();
    });

});