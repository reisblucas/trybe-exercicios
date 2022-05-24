const express = require('express');
const router = express.Router();
const { getAllOcurrencesService } = require('../services/ocurrencesServices');

router.get('/', async (req, res) => {
  const result = await getAllOcurrencesService();

  res.status(200).json(result);
});

router.post('/', (req, res) => {

  res.status(201).json({ message: "ocurrence created"});
});

module.exports = router;
