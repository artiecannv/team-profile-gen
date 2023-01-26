const Intern = require("../lib/Intern");

describe("Intern", () => {
    it("Tests to see if object is returned", () => {
    const intern = new Intern();
    expect(typeof(intern)).toBe("object");
})});