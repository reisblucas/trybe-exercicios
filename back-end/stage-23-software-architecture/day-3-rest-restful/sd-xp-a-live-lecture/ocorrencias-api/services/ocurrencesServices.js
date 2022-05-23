const { getAllOcurrences: getAllOcurrencesModel } = require('../models/ocurrencesModel');

const getAllOcurrencesService = () => {
  return getAllOcurrencesModel();
};

module.exports = {
  getAllOcurrencesService,
}