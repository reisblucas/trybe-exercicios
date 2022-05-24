const { getAllOcurrences: getAllOcurrencesModel } = require('../models/ocurrencesModel');

const getAllOcurrencesService = () => getAllOcurrencesModel();

module.exports = {
  getAllOcurrencesService,
}