const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sisu', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nimi: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    sisu: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'sisu',
    schema: 'public',
    timestamps: false
  });
};
