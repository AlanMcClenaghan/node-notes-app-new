const chalk = require("chalk");
const yargs = require("yargs");
const notes = require("./notes.js");

// Customise yargs version
yargs.version("1.1.0");

// Add, remove, read, list

// Create add Command
yargs.command({
  command: "add",
  describe: "Add a new note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string"
    },
    body: {
      describe: "Note body",
      demandOption: true,
      type: "string"
    }
  },
  handler: function(argv) {
    notes.addNote(argv.title, argv.body);
  }
});

// Create remove Command
yargs.command({
  command: "remove",
  describe: "Remove a note",
  handler: function() {
    console.log("Removing a note!");
  }
});

// Create read Command
yargs.command({
  command: "read",
  describe: "Read a note",
  handler: function() {
    console.log("Reading a note!");
  }
});

// Create list Command
yargs.command({
  command: "list",
  describe: "List notes",
  handler: function() {
    console.log("Listing notes!");
  }
});

yargs.parse();
