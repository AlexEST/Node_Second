const { Router } = require('express')
const router = Router()
const sequelize = require('../config/db.config');
var initModels = require("../models/init-models");

var models = initModels(sequelize);

//просто вывод всех стран без списка городов с подстановкой названия столицы 
router.get('/countries', async (req, res) => {
    models.country.findAll({
        attributes: [
            'code',
            'name',
            'continent',
            'region',
            'surfacearea',
            'indepyear',
            'population',
            'lifeexpectancy',
            'gnp',
            'gnpold',
            'localname',
            'governmentform',
            'headofstate',
            [sequelize.literal('(select name from city where country.capital = city.id)'), "capital"],
            'code2',
        ],
    }).then((result) => res.json(result))
})

// вывод стран по континенту
router.get("/:continent/countries", (req, res) =>
    models.country.findAll({
        where: {
            continent: req.params.continent
        }
    }).then((result) => res.json(result))
);

// запрос города по его ID
router.get("/cityById/:id", (req, res) =>
    models.city.findOne({
        where: {
            id: req.params.id
        }
    }).then((result) => res.json(result))
);

// запрос города по названию
router.get("/cityByName/:name", (req, res) =>
    models.city.findOne({
        where: {
            name: req.params.name
        }
    }).then((result) => res.json(result))
);

//информация о стране по названию
router.get("/countryByName/:name", (req, res) =>
    models.country.findAll({
        attributes: [
            'code',
            'name',
            'continent',
            'region',
            'surfacearea',
            'indepyear',
            'population',
            'lifeexpectancy',
            'gnp',
            'gnpold',
            'localname',
            'governmentform',
            'headofstate',
            [sequelize.literal('(select name from city where country.capital = city.id)'), "capital"],
            'code2',
        ],
        where: {
            name: req.params.name
        },
        include: {
            model: models.city
        },       
    }).then((result) => res.json(result))
);

// информация о стране по коду
router.get("/countryByCode/:code", (req, res) =>
    models.country.findAll({
        attributes: [
            'code',
            'name',
            'continent',
            'region',
            'surfacearea',
            'indepyear',
            'population',
            'lifeexpectancy',
            'gnp',
            'gnpold',
            'localname',
            'governmentform',
            'headofstate',
            //вставка вместо кода название столицы
            [sequelize.literal('(select name from city where country.capital = city.id)'), "capital"],
            'code2',
        ],
        where: {
            code: req.params.code
        },
        include: {
            model: models.city
        },       
    }).then((result) => res.json(result))
);




module.exports = router