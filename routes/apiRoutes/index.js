const router = require('express').Router();
const noteRoutes = require('./notes');

// Middleware function to use the api routes notes page when being asked for which js to run from server.
router.use(noteRoutes);

module.exports = router;