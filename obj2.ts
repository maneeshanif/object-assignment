// Part 2: Car Details
// Challenge:
// 1. Design a type alias named Car to represent a car object.
// 2. Include a nested object named engine within Car, containing a property named
// horsepower (number).
// 3. Define a function named getHorsepower directly within the Car type alias to retrieve the
// engine's horsepower.
import chalk  from "chalk";
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
        return car1.engine.horsepower
    }

}

console.log(chalk.blueBright.bgHex('#faf0be')("\t\t\t\t\t\t\t Employee Data"));
console.log(chalk.redBright("-----------------------------------------------------------------------------------------------------------------\n"));


console.log(chalk.blue.bold.bgHex("#d5a6bd")(`\t Name of car is ${car1.name}\n`));

console.log(chalk.red.bold.bgHex('#f4b636')(`\t Horsepower of car is ${car1.getHorsepower()}`))
console.log(chalk.hex("FFA533")("-----------------------------------------------------------------------------------------------------------------\n"));
