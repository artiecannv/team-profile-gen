//Import Employee from parent class
const Employee = require('./Employee');

//Making manager child class of the employee parent class
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.managerNumberInput = officeNumber;
    }
    getRole() {
        return 'Manager';
    }
}

module.exports = Manager;