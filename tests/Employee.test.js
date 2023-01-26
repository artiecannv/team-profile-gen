const Employee = require("../lib/Employee");

describe("Employee", () => {
    it("Tests to see if object is returned", () => {
    const employee = new Employee();
    expect(typeof(employee)).toBe("object");
})});