module.exports = {
    getForecastByCityByName: async function (req, res, city_code) {
        try {
            const fetch = await import('node-fetch');
            const CityFetch = await fetch.default(`https://api.meteo.lt/v1/places/${city_code}/forecasts/long-term`);
            const CityLongTerm = await CityFetch.json();
            
            return CityLongTerm;
        }
        catch (err) {
            console.log(err);
        }
    }
}