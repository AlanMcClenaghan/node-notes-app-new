const fs = require("fs");

const dataBuffer = fs.readFileSync("1-json.json");
const dataJSON = dataBuffer.toString();
const user = JSON.parse(dataJSON);

user.name = "Alan";
user.name = "Terra";
user.age = 46;

const userJSON = JSON.stringify(user);
fs.writeFileSync("1-json.json", userJSON);
