const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('countrylanguage', {
    countrycode: {
      type: DataTypes.CHAR(3),
      allowNull: false,
      defaultValue: "nextval((sequence1",
      primaryKey: true
    },
    lang: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    percentage: {
      type: DataTypes.REAL,
      allowNull: true,
      defaultValue: 0.0
    },
    isofficial: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'countrylanguage',
    schema: 'public',
    timestamps: false
  });
};
