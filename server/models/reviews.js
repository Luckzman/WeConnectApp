module.exports = (sequelize, DataTypes) => {
  const Reviews = sequelize.define('Reviews', {
    name: DataTypes.STRING,
  }, {});
  Reviews.associate = (models) => {
    // associations can be defined here
  };
  return Reviews;
};
