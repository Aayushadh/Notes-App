const fs = require('fs');
const chalk = require('chalk');

const readNotes = (title) => {
    const obj = loadNotes();
    let found = false;

    for (const note of obj) {
        if (note.title === title) {
            console.log(chalk.yellow.inverse.bold(note.title));
            console.log(note.body);
            found = true;
            break; // Exit the loop when the note is found.
        }
    }

    if (!found) {
        console.log(chalk.red.inverse.bold("404 Not Found!!!!"));
    }
}

// The rest of your code remains the same.
