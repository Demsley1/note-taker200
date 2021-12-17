const express = require('express');
const app = express();
const PORT = 3001;
//const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

// Express middleware to handle json data resposnes, and files run on server , port call
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

//app.use('./api', apiRoutes);
app.use('/', htmlRoutes);

// Intiial app response
app.get('/', (req, res) => {
    res.send("Hello World");
});

app.listen(PORT, () => {
    console.log(`note-taker app listening at http://localhost:${PORT}`);
});