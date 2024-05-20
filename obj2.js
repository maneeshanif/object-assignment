// Part 2: Car Details
// Challenge:
// 1. Design a type alias named Car to represent a car object.
// 2. Include a nested object named engine within Car, containing a property named
// horsepower (number).
// 3. Define a function named getHorsepower directly within the Car type alias to retrieve the
// engine's horsepower.
let car1 = {
    engine: {
        horsepower: 720
    },
    getHorsepower: () => {
        return car1.engine.horsepower + " " + "horsepower";
    }
};
console.log(car1.getHorsepower());
export {};
