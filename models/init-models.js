var DataTypes = require("sequelize").DataTypes;
var _city = require("./city");
var _country = require("./country");
var _countrylanguage = require("./countrylanguage");
var _sisu = require("./sisu");

function initModels(sequelize) {
  var city = _city(sequelize, DataTypes);
  var country = _country(sequelize, DataTypes);
  var countrylanguage = _countrylanguage(sequelize, DataTypes);
  var sisu = _sisu(sequelize, DataTypes);

  //relations
  country.hasMany(city, { foreignKey: "countrycode" })
  country.hasMany(countrylanguage, { foreignKey: "countrycode" })
  countrylanguage.belongsTo(country, { foreignKey: "countrycode" })
  city.belongsTo(country, { foreignKey: "countrycode" })

  return {
    city,
    country,
    countrylanguage,
    sisu,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
