const fs = require("fs");
const chalk = require("chalk");

const addNote = (title, body) => {
  const notes = loadNotes();
  const duplicateNote = notes.find(note => note.title === title);

  if (!duplicateNote) {
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

const readNote = title => {
  const notes = loadNotes();
  const noteToRead = notes.find(note => note.title === title);
  if (noteToRead) {
    console.log(chalk.bold(noteToRead.title) + ": " + noteToRead.body);
  } else {
    console.log(chalk.inverse.red("Note not found!"));
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
  addNote,
  removeNote,
  listNotes,
  readNote
};
