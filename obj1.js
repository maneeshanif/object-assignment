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
//The assignment is completed above.  In the following section, 
//I'll explore techniques for printing objects in various ways for my self-study. 
// Below, you'll find examples of how to achieve this.
// its print the whole object
console.log(employee);
export {};
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
