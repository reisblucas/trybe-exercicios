const express = require('express');

const booksController = require('../controllers/booksController');

const router = express.Router();
// Routers
router.use('/books', booksController);

module.exports = router;