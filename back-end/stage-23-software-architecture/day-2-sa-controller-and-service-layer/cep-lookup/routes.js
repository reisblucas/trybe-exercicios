const express = require('express');
const route = express.Router();

const pingController = require('./controllers/pingController');
route.use('/ping', pingController);

module.exports = route;