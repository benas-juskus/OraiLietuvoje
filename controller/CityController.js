const CityModel = require('../model/CityModel');
const RegionModel = require('../model/RegionModel');

module.exports = {
    getAllCities: async function (req, res) {
        try {
            const city_list = await CityModel.getAllCities();
            const regions_list = await RegionModel.getAllRegions();
            res.render('pages/cities', { title: 'Express', city_list: city_list, regions_list: regions_list });
        }
        catch (err) {
            console.log(err);
        }
    }
}