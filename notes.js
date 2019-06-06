const fs = require("fs");
const chalk = require("chalk");

const getNotes = function() {
  return "Your notes...";
};

const addNote = function(title, body) {
  const notes = loadNotes();
  const duplicateNotes = notes.filter(function(note) {
    return note.title === title;
  });

  if (duplicateNotes.length === 0) {
    notes.push({
      title,
      body
    });
    savedNotes(notes);
    console.log(chalk.inverse.green(`${title} added!`));
  } else {
    console.log(chalk.inverse.red(`${title} already exists!`));
  }
};

const removeNote = function(title) {
  const notes = loadNotes();
  const filteredNotes = notes.filter(function(note) {
    return note.title !== title;
  });
  savedNotes(filteredNotes);
  if (notes.length > filteredNotes.length) {
    console.log(chalk.inverse.green(`${title} removed!`));
  } else {
    console.log(chalk.inverse.red(`${title} not found`));
  }
};

const savedNotes = function(notes) {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};

const loadNotes = function() {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
};

module.exports = {
  getNotes,
  addNote,
  removeNote
};
