const router = require('express').Router();
/*const { createNewNote } = require('../../lib/note');*/
const database = require('../../db/db.json');
const fs = require('fs');
const path = require('path');

router.get('/notes', (req, res) => {
    let results = database
    res.json(results);
});

router.post('/notes', (req, res) => {
    req.body.id = database.length.toString();
    
    const createNewNote = (data, dbArray) => {
        const database = dbArray
        database.push(data);
        fs.writeFileSync(
            path.join(__dirname, '../../db/db.json'),
            JSON.stringify( dbArray, null, 2)
        );
        return database;
    };

    const note = createNewNote(req.body, database);
    res.json(note);
});

module.exports = router;