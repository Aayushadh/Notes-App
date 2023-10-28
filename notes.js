const fs = require('fs');
const chalk = require('chalk')
const readNotes=(title)=>{
    const obj=loadNotes();
    let reading=obj.find((note)=>{
        if(note.title===title)
        {
            console.log(chalk.yellow.inverse.bold(note.title));
            console.log(note.body);
        }
        return note.title===title;//returns the title of note.
    })
    if(!reading)
    {
        console.log(chalk.red.inverse.bold("404 Not Found!!!!"));
    }
    
}
const listNotes = () => {
    const obj = loadNotes();
    console.log(chalk.blue.inverse.bold("Your Notes"));
    obj.forEach(element => {
        console.log((element.title));
    });
}
const addNotes = (title, body) => {

    let obj = loadNotes();
    let duplicate = obj.find((notes) => notes.title === title);
    if (!duplicate) {
        console.log(chalk.green.inverse.bold("Note Added Successfully!"));
        obj.push({
            title: title,
            body: body
        });
        saveNotes(obj);

    } else {
        console.log(chalk.red.inverse.bold("Title Alread Exists"));
    }

}

const removeNotes = (title) => {
    //console.log("Removing Note.."+title+" removed successfully");
    let obj = loadNotes();
    let deleted = obj.filter((note) => !(note.title === title));

    if (deleted.length === obj.length) {
        console.log(chalk.red.inverse.bold("404 Not Found!!!!"));
    } else {
        console.log(chalk.green.inverse.bold("Removed Successfully!!!"));
        saveNotes(deleted);
    }



}

const saveNotes = (obj) => {
    let data = JSON.stringify(obj);
    fs.writeFileSync('data.json', data);
}

const loadNotes = () => {
    try {
        let dataBuffer = fs.readFileSync('data.json');
        let data = JSON.parse(dataBuffer.toString());
        return data;
    } catch (e) {
        return [];
    }
}

module.exports = {
    addNotes,
    loadNotes,
    removeNotes,
    listNotes,
    readNotes
};
