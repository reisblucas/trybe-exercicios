const express = require('express');
const router = express.Router();
const ocurrencesController = require('./controllers/ocurrencesController');

//Health Checker controller
router.use('/healthchecker', require('./controllers/healthchecker'));

router.use('/ocurrences', ocurrencesController);

module.exports = router;