module.exports = (sequelize, DataTypes) => {
  const PatientSurgery = sequelize.define('PatientSurgery', {
    patient_id: DataTypes.INTEGER,
    surgery_id: DataTypes.INTEGER,
  }, {
    tableName: 'PatientSurgeries',
    underscored: true,
  });

  PatientSurgery.associate = (models) => {
    PatientSurgery.hasMany(models.Patient,
      { foreignKey: 'patient_id', as: 'patients' });
    PatientSurgery.hasMany(models.Surgery,
      { foreignKey: 'surgery_id', as: 'surgeries' });
  }

  return PatientSurgery;
};