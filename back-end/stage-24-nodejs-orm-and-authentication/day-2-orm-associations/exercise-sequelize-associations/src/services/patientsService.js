// const { Patients } = require('../db/models');
// cannot bring models to the service layer

const getAll = async () => Patients.findAll({
  include: { model: Plan, as: 'plans' }
});

module.exports = {
  getAll,
};