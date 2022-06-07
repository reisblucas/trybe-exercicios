const BookSchema = (sequelize, DataTypes) => {
  const BookTable = sequelize.define('Books', {
    title: DataTypes.STRING,
    author: DataTypes.STRING,
    pageQuantity: DataTypes.INTEGER
  });

  return BookTable;
};

module.exports = BookSchema;