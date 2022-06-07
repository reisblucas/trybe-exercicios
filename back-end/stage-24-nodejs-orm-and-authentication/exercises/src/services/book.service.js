const { Books } = require('../models');

const getAll = () => Books.findAll();

module.exports = {
  getAll,
};