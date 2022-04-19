const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('country', {
    code: {
      type: DataTypes.CHAR(3),
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    continent: {
      type: DataTypes.STRING(15),
      allowNull: true,
      defaultValue: "Asia"
    },
    region: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    surfacearea: {
      type: DataTypes.REAL,
      allowNull: true,
      defaultValue: 0.0
    },
    indepyear: {
      type: DataTypes.SMALLINT,
      allowNull: true
    },
    population: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    lifeexpectancy: {
      type: DataTypes.REAL,
      allowNull: true
    },
    gnp: {
      type: DataTypes.REAL,
      allowNull: true
    },
    gnpold: {
      type: DataTypes.REAL,
      allowNull: true
    },
    localname: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    governmentform: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    headofstate: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    capital: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    code2: {
      type: DataTypes.CHAR(2),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'country',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "Code_primary_key",
        unique: true,
        fields: [
          { name: "code" },
        ]
      },
    ]
  });
};
