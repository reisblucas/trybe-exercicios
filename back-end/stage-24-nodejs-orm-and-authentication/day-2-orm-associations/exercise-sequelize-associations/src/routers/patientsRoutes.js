const express = require('express');

const { patientsController } = require('../controllers');

const patientsRoutes = express.Router();

patientsRoutes.route('/')
  .get(patientsController.getAll);

module.exports = patientsRoutes;