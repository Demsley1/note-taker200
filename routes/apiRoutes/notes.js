// Require dependancies, and npm packages like router method for express server, and the db.json page to be used as data inserted into page and added too on user input.
const router = require('express').Router();
const database = require('../../db/db.json');
const fs = require('fs');
const path = require('path');

// Using the router method, send a get request to server with path api/notes, and it sends back a response with the json version of the database.json file.
router.get('/notes', (req, res) => {
    let results = database
    res.json(results);
});

// Send a post request to server from same path, set the body id to a unique id, and run a function to create a new note.
router.post('/notes', (req, res) => {
    req.body.id = database.length.toString();
    
    // functions accepts the body of the request being sent to server, and pushes its value into existing database array. 
    const createNewNote = (data, dbArray) => {
        const database = dbArray
        database.push(data);
        // Here the newly created file is synced with the system file for database. It is done by finding the file at file path location, and saves it as a json object going back into the local file system with apporpriate spacing.
        fs.writeFileSync(
            path.join(__dirname, '../../db/db.json'),
            JSON.stringify(dbArray, null, 2)
        );
        return database;
    };

    // variable that references the callback to funciton that creates the note.
    const note = createNewNote(req.body, database);
    // send the whole value back to server as a json object.
    res.json(note);
});

// Export all functions to main server page.
module.exports = router;