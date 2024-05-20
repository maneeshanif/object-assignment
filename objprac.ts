// Its is just normall practise of an object which involved in finalized this assignment,
//  In other words you say its rough work for assignment
type Hellouser = {
    name:string,
    greet: ()=> string  // in type alises you have only two way to assign function in key (1) arrow function .(2) anonymous funtion
}

let hellouser:Hellouser ={
    name:"anees",
    greet: ()=> `hello ${hellouser.name}, nice to meet you` // i use arrow function here
}
hellouser.name = "admin"
// console.log(hellouser.greet());

