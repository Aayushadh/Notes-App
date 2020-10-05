const validator = require("validator");
const yargs = require('yargs');
const notes = require('./notes');

yargs.command({
        command: 'add',
        describe: 'Adding notes',
        builder: {
            title: {
                describe: "Note-Title",
                demandOption: true,
                type: "string"
            },
            body: {
                describe: "Note-Body",
                demandOption: true,
                type: "string"
            }
        },
        handler(argv) {

            notes.addNotes(argv.title, argv.body);
        }

    }

);
yargs.command({
    command: 'remove',
    describe: 'Removing notes',
    builder: {
        title: {
            describe: "Note-Title",
            demandOption: true,
            type: "string"
        }

    },
    handler(argv) {
        notes.removeNotes(argv.title);
    }

});
yargs.command({
    command: 'read',
    describe: 'Reading notes',
    builder: {
        title: {
            describe: "Note-Title",
            demandOption: true,
            type: "string"
        }


    },
    handler(argv) {

        notes.readNotes(argv.title);

    }

});
yargs.command({
    command: 'list',
    describe: 'listing notes',
    handler() {
        notes.listNotes();
    }

});
yargs.parse();