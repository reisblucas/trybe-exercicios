const express = require('express');

const router = express.Router();
const patientsRoutes = require('./patientsRoutes');

router.use('/patients', patientsRoutes);

module.exports = router;