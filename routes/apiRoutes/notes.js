const router = require('express').Router();
const { createNewNote } = require('../../lib/note');
const { database } = require('../../db/db.json');

router.get('/notes', (req, res) => {
    let results = database
    res.json(results);
});

/*router.post('/notes', (req, res) => {
    req.body.id = database.length.toString();
    const note = createNewNote(req.body, database);
    res.json(note);
});*/

module.exports = router;