const fs = require("fs");
const chalk = require("chalk");

const getNotes = () => "Your notes...";

const addNote = (title, body) => {
  const notes = loadNotes();
  const duplicateNotes = notes.filter(note => note.title === title);
  // const duplicateNotes = notes.filter(note => {
  //   return note.title === title;
  // });

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

const removeNote = title => {
  const notes = loadNotes();
  const filteredNotes = notes.filter(note => note.title !== title);
  // const filteredNotes = notes.filter(note => {
  //   return note.title !== title;
  // });
  savedNotes(filteredNotes);
  if (notes.length > filteredNotes.length) {
    console.log(chalk.inverse.green(`${title} removed!`));
  } else {
    console.log(chalk.inverse.red(`${title} not found`));
  }
};

const listNotes = () => {
  const notes = loadNotes();
  console.log(chalk.inverse("Your Notes"));
  notes.forEach(note => {
    console.log(note.title);
  });
};

const savedNotes = notes => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};

const loadNotes = () => {
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
  listNotes,
  removeNote
};
