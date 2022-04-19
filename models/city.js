const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('city', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: "nextval((seq_city_id",
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    countrycode: {
      type: DataTypes.CHAR(3),
      allowNull: true
    },
    district: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    population: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'city',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "ID_primary_key",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "ixcityname",
        fields: [
          { name: "name" },
        ]
      },
    ]
  });
};
