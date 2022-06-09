module.exports = (sequelize, DataTypes) => {
  const Plan = sequelize.define('Plan', {
    plan_id: DataTypes.INTEGER,
    coverage: DataTypes.STRING,
    price: DataTypes.DOUBLE
  }, {
    tableName: 'Plans',
    underscored: true,
  });

  Plan.associate = (models) => {
    Plan.belongsToMany(models.Patient,
      { foreignKey: 'patient_id', as: 'patients' });
  }

  return Plan;
}