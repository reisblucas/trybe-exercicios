const express = require('express');

const route = express.Router();

// validar o cep
route.get('/:cep', (req, res) => {
  return res.status(200).json({ message: "pong!"});
});

module.exports = route;