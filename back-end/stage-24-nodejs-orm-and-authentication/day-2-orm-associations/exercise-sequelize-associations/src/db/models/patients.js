module.exports = (sequelize, DataTypes) => {
  const Patient = sequelize.define('Patient', {
    surgery_id: DataTypes.INTEGER,
    specialty: DataTypes.STRING,
    doctor: DataTypes.STRING,
  }, {
    tableName: 'Surgeries',
    underscored: true,
  });

  Patient.associate = (models) => {
    Patient.hasOne(models.Plan,
      { foreignKey: 'plan_id', as: 'plans' });
    Patient.belongsToMany(models.PatientSurgeries,
      { foreignKey: 'patient_id', as: 'patients'});
  };

  return Patient;
};