module.exports = {
    getAllCities: async function () {
        const fetch = await import('node-fetch');
        const response = await fetch.default('https://api.meteo.lt/v1/places');
        const city_list = await response.json();
        return city_list;
    },
    getCityByName: async function (req, res, city_name) {
        try {
            const fetch = await import('node-fetch');
            const response = await fetch.default(`https://api.meteo.lt/v1/places/${city_name}`);
            const cityList = await response.json();
            return cityList;
        }
        catch (err) {
            console.log(err);
        }
    }
}