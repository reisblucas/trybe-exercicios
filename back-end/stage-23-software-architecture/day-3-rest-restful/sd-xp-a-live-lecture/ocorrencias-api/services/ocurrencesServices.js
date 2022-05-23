const { getAllOcurrences: getAllOcurrencesModel } = require('../models/ocurrencesModel');

const getAllOcurrencesService = () => {
  const response = getAllOcurrencesModel();

  console.log(response);

  return response;
};

module.exports = {
  getAllOcurrencesService,
}