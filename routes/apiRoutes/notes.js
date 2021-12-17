const router = require('express').Router();
const { createNewNote } = require('../../lib/note');
const dataBase = require('../../db/db.json');

router.get('/notes', (req, res) => {
    
});

router.post('/notes', (req, res) => {
    req.body.id = dataBase.length.toString();
    const note = createNewNote(req.body, dataBase);
    res.json(note);
});

module.exports = router;