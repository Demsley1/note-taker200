const router = require('express').Router();
const dataBase = require('../../db/db.json')

router.post('/notes', (req, res) => {
    req.body.id = dataBase.length.toString();
    
})

module.exports = router;