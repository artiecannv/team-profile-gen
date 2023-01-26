const Manager = require("../lib/Manager");

describe("Manager", () => {
    it("Tests to see if object is returned", () => {
    const manager = new Manager();
    expect(typeof(manager)).toBe("object");
})});