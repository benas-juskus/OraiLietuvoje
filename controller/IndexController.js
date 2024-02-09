const CityModel = require('../model/CityModel');
const ForecastModel = require('../model/ForecastModel');

module.exports = {
    getCitiesForIndex: async function (req, res) {
        try {
            const city_list = await CityModel.getAllCities();
            const VlnLongTerm = await ForecastModel.getForecastByCityByName(req, res, 'vilnius');
            const KnsLongTerm = await ForecastModel.getForecastByCityByName(req, res, 'kaunas');
            const KlpLongTerm = await ForecastModel.getForecastByCityByName(req, res, 'klaipeda');

            res.render('index', { title: 'Orai Lietuvoje', city_list: city_list, VlnLongTerm: VlnLongTerm, KnsLongTerm: KnsLongTerm, KlpLongTerm: KlpLongTerm });
        }
        catch (err) {
            console.log(err);
        }
    }
}