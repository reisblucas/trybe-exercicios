const express = require('express');
const router = express.Router();
const { getAllOcurrencesService } = require('../services/ocurrencesServices');

router.get('/', async (req, res) => {

  // chamar services e ter middlewares
  const result = await getAllOcurrencesService();
  console.log(result);
  res.status(200).json(result);
});

module.exports = router;
