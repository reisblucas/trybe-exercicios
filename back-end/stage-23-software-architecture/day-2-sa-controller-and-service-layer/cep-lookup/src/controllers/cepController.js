const express = require('express');
const route = express.Router();
const mid = require('../middlewares/index');

route.get('/:cep', mid.cepVerifier, (req, res) => {
  return res.status(200).json({ message: "cepado"});
});

module.exports = route;