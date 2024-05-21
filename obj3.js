// Part 3: Colorful T-Shirts
// Challenge:
// 1. Design a type alias named Product to represent a T-shirt object with properties like name
// (string), price (number), and color (string).
// 2. Include a nested object named inventory within Product. This inventory object
// should have two properties:
// o stock (number): Represents the number of T-shirts available.
// o colorOptions (optional array of strings): Lists available colors (if any).
// 3. Inside the inventory object, define a function named changeColor. This function
// accepts a new color string as an argument. When called, it should:
// o Update the color property of the Product object.
// o Adjust the price based on the new color (implement your own logic, e.g.,
// increase by 10% for red, decrease by 5% for blue).
let products = {
    name: "polo-tshirt",
    price: 2000,
    color: "black",
    inventory: {
        stock: 30,
        colorOptions: ["red", "blue", "white", "black", "gray"],
        changeColor: (newcolor) => {
            if (products.inventory.colorOptions?.includes(newcolor)) {
                products.color = newcolor;
                if (newcolor == "red") {
                    products.price *= 1.1;
                    return console.log(`you select ${products.name} of ${products.color} and its price is ${products.price}`);
                }
                else if (newcolor == "blue") {
                    products.price *= 0.95;
                    return console.log(`you select ${products.name} of ${products.color} and its price is ${products.price}`);
                }
                else {
                    return console.log(`you select ${products.name} of ${products.color} and its price is ${products.price}`);
                }
            }
            else {
                return console.log(`Color "${newcolor}" is not available.`);
            }
        },
    }
};
console.log(products.inventory.changeColor("blu"));
export {};
