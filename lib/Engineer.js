const Employee = require("./Employee");

// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.

class Engineer extends Employee {
    constructor (name, id, email, github) { // Do I need to include the previous paramaters from the Employee.js file?
        super (name, id, email); // Will "Engineer" override the role selection?
            this.github = github;
            this.role = "Engineer";

    }


// methods defined here

getGithub () {
    return this.github;
}

getRole () {
    return this.role;
} // Do I need this since it is predefined above ("Engineer")?

}
// console.log("---Engineer---");
// engineer.getName();
// engineer.getId ();
// engineer.getEmail ();
// engineer.getRole ();
// engineer.getGitHub();

module.exports = Engineer;