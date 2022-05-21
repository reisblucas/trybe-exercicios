const express = require('express');
const route = express.Router();

const pingController = require('./src/controllers/pingController');
route.use('/ping', pingController);

const cepController = require('./src/controllers/cepController');
route.use('/cep', cepController);

module.exports = route;