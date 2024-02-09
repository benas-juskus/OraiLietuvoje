module.exports = {
    getAllCities: async function () {
        return await fetch('https://api.meteo.lt/v1/places');
    }
}