const Employee = require("./Employee");

// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.


class Manager extends Employee {
    constructor (name, id, email, officeNumber) { // Do I need to include the previous paramaters from the Employee.js file?
        super (name, id, email); // Will "Manager" override the role selection?
            this.officeNumber = officeNumber;
            this.role = "Manager";

    }


// methods defined here

getOfficeNumber () {
    return this.officeNumber;
}

getRole (){
    return this.role;
} // Do I need this since it is predefined above ("Manager")?
}

// console.log("---Manager---");
// manager.getName();
// manager.getId ();
// manager.getEmail ();
// manager.getRole ();
// manager.getofficeNumber();

module.exports = Manager;




