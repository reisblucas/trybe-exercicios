const express = require('express');
const route = express.Router();

const pingController = require('../controllers/pingController');
route.use('/ping', pingController);

const zipCodeController = require('../controllers/zipCodeController');
route.use('/cep', zipCodeController);

module.exports = route;