const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
    it("Tests to see if object is returned", () => {
    const engineer = new Engineer();
    expect(typeof(engineer)).toBe("object");
})});