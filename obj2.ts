// Part 2: Car Details
// Challenge:
// 1. Design a type alias named Car to represent a car object.
// 2. Include a nested object named engine within Car, containing a property named
// horsepower (number).
// 3. Define a function named getHorsepower directly within the Car type alias to retrieve the
// engine's horsepower.

type Car = {
    name?:string,
    engine : {
        horsepower:number
    }
    getHorsepower: () => void
}

let car1 :Car ={
    name:"mclaren",
    engine:{
        horsepower:720
    },
    getHorsepower: () => {    // i notice using {} brackets is must\compalsory in return function
        return car1.engine.horsepower+" "+"horsepower"
    }
}
console.log(car1.getHorsepower())