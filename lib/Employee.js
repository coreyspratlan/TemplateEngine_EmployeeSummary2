

// TODO: Write code to define and export the Employee class


class Employee {
        constructor (name, id, email) {
            this.name = name;
            this.id = id;
            this.email = email;
            // this.role = role; // Give the user input the choice of the 3 types of roles?

        }

// methods defined here

 getName () {
    return this.name;
}

 getId () {
    return this.id;
}

 getEmail () {
    return this.email;
}

getRole (){
    return "Employee";
}
}
        

// methods to run (here or in the team.html generated dynamically?)

// getName ();
// getId ();
// getEmail ();
// getRole ();

module.exports = Employee;
