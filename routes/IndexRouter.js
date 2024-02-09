const express = require('express');
const router = express.Router();
const CityController = require('../controller/CityController');
const IndexController = require('../controller/IndexController');

router.get('/', IndexController.getCitiesForIndex);
router.get('/cities', CityController.getAllCities);

module.exports = router;