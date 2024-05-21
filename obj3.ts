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
import chalk from "chalk"
type Product = {
  name: string;
  price: number;
  color: string;
  inventory: {
    stock: number;
    colorOptions?: string[];
    changeColor: (newcolor: string) => void
  };
};

let products: Product = {
  name: "polo-tshirt",
  price: 2000,
  color: "black",
  inventory: {
    stock: 30,
    colorOptions: ["red", "blue", "white", "black", "gray"],
 
    changeColor: (newcolor: string) => {
      if(products.inventory.colorOptions?.includes(newcolor)){
        products.color = newcolor
        if(newcolor == "red"){
          products.price *= 1.1
          console.log(
            `The ${newcolor} one  ${products.name} costs 10% more than the ordinary one due to being a premium item.`
          );
          return `you select ${products.name} of color ${products.color}" and its price is Rs${products.price}`;
          
          
          
        }else if(newcolor == "blue"){
          products.price *= 0.95
          console.log(
            `Enjoy 5% off on ${newcolor}  ${products.name}!`
          );
          
          return `you select ${products.name} of color "${products.color}" and its price is Rs${products.price}`;
          
        }else{
          return `you select ${products.name} of color "${products.color}" and its price is Rs${products.price}`;
        }
        
      }else{
        return `Color "${newcolor}" is not available.`;
        
      }
    
    },
  }
};
console.log("\t\t\t\t\t\t T-shirt Store");
console.log("-----------------------------------------------------------------------------------------------------------------\n");
console.log(`Products name: ${products.name}`);
console.log(`Products price: ${products.price}`);
// console.log(`Products color: ${products.color}`); there is color black as default color bcoz in func we update it into our desirable color which user want to buy
console.log(`Products available colors: ${products.inventory.colorOptions}`);
console.log(`Products stock: ${products.inventory.stock}`);
// console.log(`product you select ${products.inventory.changeColor("red")}`); here our worl done but i want to 
// store it into new varaible for future use bcoz this way is static we want to make it dynamically in which
// user write thier desirable color for this we use inquirer so ignore this comment 
console.log("-----------------------------------------------------------------------------------------------------------------\n");
console.log("\t\t\t\t\t\t User Cart");

console.log("\n\n");


let userinput = products.inventory.changeColor("red");
console.log(userinput);
console.log("-----------------------------------------------------------------------------------------------------------------\n");
console.log("-----------------------------------------------------------------------------------------------------------------\n");


