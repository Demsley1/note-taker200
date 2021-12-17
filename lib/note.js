const fs = require('fs');
const path = require('path');

const createNewNote = (data, dbArray) => {
    const database = dbArray
    database.push(data);
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({ datbase : dbArray }, null, 2)
    );
    return database;
};

module.exports = {
    createNewNote
}