// Part 1: Employee Data
// Challenge:
// 1. Design a type alias named Employee to represent an employee object with properties like
// name (string), department (string), and role (string).
// 2. Include an optional nested object named contact to hold phone and email information (if
// provided).
// 3. Employ a union type for the role property to restrict it to "Manager", "Engineer", or
// "Intern".
// 4. Make the skills property an optional array of strings for listing an employee's skills (if
// any).
import chalk from "chalk";
let employee = {
    name: "anees",
    department: "computer science",
    role: "intern",
    skills: ["programmer", "c", "html", "css", "javascript", "typescript"],
    contact: {
        phone: "987654321",
        email: "anees@gmail.com"
    },
};
console.log(chalk.blueBright.bgHex('#faf0be')("\t\t\t\t\t\t\t Employee Data"));
console.log(chalk.redBright("-----------------------------------------------------------------------------------------------------------------\n"));
//The assignment is completed above.  In the following section, 
//I'll explore techniques for printing objects in various ways for my self-study. 
// Below, you'll find examples of how to achieve this.
// its print the whole object
console.log(employee);
console.log(chalk.hex("FFA533")("-----------------------------------------------------------------------------------------------------------------\n"));
// its prints the keys of object
// console.log(Object.keys(employee));
// this prints the values of object and as you know object is collection of keys and value
// console.log(Object.values(employee));
// This method is used to extract key-value pairs from an object and return them as an array.
// console.log(Object.entries(employee));
// You can assign a new value to a property of an object outside of the object itself.
// employee.name = "ahmed"
// console.log(employee);
// Even outside the object definition, you can add a new property like 'age' and assign a value to it.
//  However, using type aliases can introduce issues because they don't enforce strict property names after
//  declaration.
//   employee.age = 20  !Error occured due to type aliases
// You can even print the value associated with a desired key of an object.
// console.log(employee.name);
// console.log(employee.contact)
// console.log(employee.skills);
// console.log(employee.role);
// console.log(employee.department);
// console.log(employee.contact?.email);
// console.log(employee.contact?.phone);
