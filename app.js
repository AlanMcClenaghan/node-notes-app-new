const fs = require("fs");

fs.writeFileSync("notes.txt", "This file was created by Node.js.");

// Challnege: Aapend a message to notes.txt

// 1. Use appendFileSync to append to the file

fs.appendFileSync("notes.txt", " This text was added to notes.txt by Node.js.");

// 2. Run the script
