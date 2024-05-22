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
import chalk from "chalk";
type Product = {
  name: string;
  price: number;
  color: string;
  inventory: {
    stock: number;
    colorOptions?: string[];
    changeColor: (newcolor: string) => void;
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
      if (products.inventory.colorOptions?.includes(newcolor)) {
        products.color = newcolor;
        if (newcolor == "red") {
          products.price *= 1.1;
          console.log(
            chalk
              .hex("8A33FF")
              .bold.italic.underline(
                `The ${newcolor} one  ${products.name} costs 10% more than the ordinary one due to being a premium item.`
              )
          );
          return chalk.redBright(
            `you select ${products.name} of color "${products.color}" and its price is Rs${products.price}`
          );
        } else if (newcolor == "blue") {
          products.price *= 0.95;
          console.log(
            chalk.green.bold.underline(
              `Enjoy 5% off on ${newcolor}  ${products.name}!`
            )
          );

          return chalk.blueBright.bold.italic(
            `you select ${products.name} of color "${products.color}" and its price is Rs${products.price}`
          );
        } else {
          return chalk.magentaBright.bold.italic(
            `you select ${products.name} of color "${products.color}" and its price is Rs${products.price}`
          );
        }
      } else {
        return chalk.cyanBright.strikethrough(
          `Color "${newcolor}" is not available.`
        );
      }
    },
  },
};
console.log(
  chalk.hex("#f77e1a").bold.bgHex("#fff2cc")("\t\t\t\t\t\t T-shirt Store")
);
console.log(
  chalk.cyanBright(
    "-----------------------------------------------------------------------------------------------------------------\n"
  )
);
console.log(chalk.redBright(`Products name: ${products.name}`));
console.log(chalk.hex("FFA533")(`Products price: ${products.price}`));
// console.log(`Products color: ${products.color}`); there is color black as default color bcoz in func we update it into our desirable color which user want to buy
console.log(
  chalk.hex("93FF33")(
    `Products available colors: ${products.inventory.colorOptions}`
  )
);
console.log(chalk.hex("33FFE6")(`Products stock: ${products.inventory.stock}`));
// console.log(`product you select ${products.inventory.changeColor("red")}`); here our worl done but i want to
// store it into new varaible for future use bcoz this way is static we want to make it dynamically in which
// user write thier desirable color for this we use inquirer so ignore this comment
console.log(
  chalk.cyanBright(
    "-----------------------------------------------------------------------------------------------------------------\n"
  )
);
console.log(chalk.hex("93FF33").bold.bgYellowBright("\t\t\t\t\t\t User Cart"));

console.log("\n\n");

let userinput = products.inventory.changeColor("blue");
console.log(userinput);
console.log(
  chalk.magentaBright(
    "-----------------------------------------------------------------------------------------------------------------\n"
  )
);
console.log(
  chalk.magentaBright(
    "-----------------------------------------------------------------------------------------------------------------\n"
  )
);
