const { patientsServices } = require('../services');

const getAll = (req, res, next) => {
  const patients = patientsServices.getAll();

  return res.status(200).json(patients);
};

module.exports = {
  getAll,
};