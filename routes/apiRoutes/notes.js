const router = require('express').Router();
const { createNewNote } = require('../../lib/note');
const { database } = require('../../db/db.json');

router.get('/notes', (req, res) => {
    let results = database
});

router.post('/notes', (req, res) => {
    req.body.id = dataBase.length.toString();
    const note = createNewNote(req.body, dataBase);
    res.json(note);
});

module.exports = router;