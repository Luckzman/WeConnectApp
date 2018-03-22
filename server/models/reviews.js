module.exports = (sequelize, DataTypes) => {
  const Reviews = sequelize.define('Reviews', {
    name: DataTypes.STRING,
  }, {});
  Reviews.associate = (models) => {
    Reviews.belongsTo(models.Business, {
      foreignKey: 'businessId',
      onDelete: 'CASCADE',
    });
  };
  return Reviews;
};
