// Challenge: Use the chalk library in your project

// 1. Install version 2.4.1 of chalk
// 2. Load Chalk into app.js
const chalk = require("chalk");

// 3. Use Chalk to print the string "Success!" to the console in green;

const log = console.log;

log(chalk.green("Success!"));

// 4. Test your work.

// BONUS: Use docs to mess around with other stlyes. Make text bold and inversed.

log(chalk.bold("Success in bold!"));
log(chalk.inverse.green("Success in reverse!"));

// Examples of using chalk

// Combine styled and normal strings
log(chalk.blue("Hello") + " World" + chalk.red("!"));

// Compose multiple styles using the chainable API
log(chalk.blue.bgRed.bold("Hello world!"));

// Pass in multiple arguments
log(chalk.blue("Hello", "World!", "Foo", "bar", "biz", "baz"));

// Nest styles
log(chalk.red("Hello", chalk.underline.bgBlue("world") + "!"));

// Nest styles of the same type even (color, underline, background)
log(
  chalk.green(
    "I am a green line " +
      chalk.blue.underline.bold("with a blue substring") +
      " that becomes green again!"
  )
);

// const validator = require("validator");

// console.log(validator.isEmail("alandmcclenaghan@icloud.com"));
// console.log(validator.isEmail("icloud.com"));
// console.log(validator.isURL("icloud.com"));

// Challenge: Define and use a function in a new file
// 1. Create a new file called notes.js
// 2. Create getNotes function that returns "Your notes..."
// 3. Export getNotes function
// 4. From app.js, load in and call the function printing the message to the console.
// const getNotes = require("./notes");

// console.log(getNotes());

// const add = require("./utils");

// const sum = add(2, 2);

// console.log(sum);

// const fs = require("fs");

// fs.writeFileSync("notes.txt", "This file was created by Node.js.");

// // Challnege: Append a message to notes.txt

// // 1. Use appendFileSync to append to the file

// fs.appendFileSync("notes.txt", " This text was added to notes.txt by Node.js.");

// // 2. Run the script
