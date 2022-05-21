const express = require('express');
const route = express.Router();

const pingController = require('./controllers/pingController');
route.use('/ping', pingController);

const cepController = require('./controllers/cepController');
route.use('/cep', cepController);

module.exports = route;