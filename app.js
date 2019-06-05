// Challenge: Define and use a function in a new file
// 1. Create a new file called notes.js
// 2. Create getNotes function that returns "Your notes..."
// 3. Export getNotes function
// 4. From app.js, load in and call the function printing the message to the console.
const getNotes = require("./notes");

console.log(getNotes());

// const add = require("./utils");

// const sum = add(2, 2);

// console.log(sum);

// const fs = require("fs");

// fs.writeFileSync("notes.txt", "This file was created by Node.js.");

// // Challnege: Append a message to notes.txt

// // 1. Use appendFileSync to append to the file

// fs.appendFileSync("notes.txt", " This text was added to notes.txt by Node.js.");

// // 2. Run the script
