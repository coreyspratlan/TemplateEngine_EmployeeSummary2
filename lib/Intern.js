const Employee = require("./Employee");

// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
class Intern extends Employee {
    constructor (name, id, email, school) { // Do I need to include the previous paramaters from the Employee.js file?
        super (name, id, email); // Will "Engineer" override the role selection?
            this.school = school;
            this.role = "Intern";

    }


// methods defined here

getSchool () {
    return this.school;
}

getRole (){
    return this.role;
} // Do I need this since it is predefined above ("Intern")?
}
        

module.exports = Intern;