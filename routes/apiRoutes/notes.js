// Require dependancies, and npm packages like router method for express server, and the db.json page to be used as data inserted into page and added too on user input.
const router = require('express').Router();
const database = require('../../db/db.json');
const  { v4: uuidv4 } = require('uuid');
const fs = require('fs');
const path = require('path');

// Using the router method, send a get request to server with path api/notes, and it sends back a response with the json version of the database.json file.
router.get('/notes', (req, res) => {
    let results = database
    res.json(results);
});

// Send a post request to server from same path, set the body id to a unique id, and run a function to create a new note.
router.post('/notes', (req, res) => {
    // set the id of the request body to a unique id
    req.body.id = uuidv4();
    
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

router.delete('/notes/:id', (req, res) => {
    // Set id value from request parameters id
    let id = req.params.id;
    // Find the object in array where above id value matches objects set id value
    let noteObject = database.find(data => data.id == id);
    // Set index for noteObject variable to a new variable
    let i = database.indexOf(noteObject);
    // (Better than delete method) Use splice to remove index from database array
    database.splice(i, 1);
    // Have to sync file or change will only persist in local server
    fs.writeFileSync(
        path.join(__dirname, '../../db/db.json'),
        JSON.stringify(database, null, 2)
    );
    res.status(204).send("note was deleted");
});

// Export all functions to main server page.
module.exports = router;