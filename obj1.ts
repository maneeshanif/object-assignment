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

type Employee = {
    name:string,
    department:string,
    role:"manager"| "engineer" | "intern",
    skills?:string[],
    contact:{
        phone:string,
        email:string,
    }
}

let employee:Employee = {
    name:"anees",
    department:"computer science",
    role:"intern",
    skills:["programmer","c","html","css","javascript","typescript"],
    contact: {
        phone:"987654321",
        email:"anees@gmail.com"   
    },
}

// console.log(Object.entries(employee));
console.log(employee);

