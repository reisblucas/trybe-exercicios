module.exports = (sequelize, DataTypes) => {
  const Surgery = sequelize.define('Surgery', {
    surgery_id: DataTypes.INTEGER,
    specialty: DataTypes.STRING,
    doctor: DataTypes.STRING,
  }, {
    tableName: 'Surgeries',
    underscored: true,
  });

  Surgery.associate = (models) => {
    Surgery.hasOne(models.Patient,
      { foreignKey: 'patient_id', as: 'patients' });
    Surgery.belongsToMany(models.PatientSurgeries,
      { foreignKey: 'surgery_id', as: 'surgeries' });
  }

  return Surgery;
};