module.exports = {
    getAllRegions: async function () {
        const fetch = await import('node-fetch');
        const response = await fetch.default('https://api.meteo.lt/v1/places'); // Use fetch.default
        const regions = await response.json();
        let regions_list = [];
        
        for (let i of regions) {
            regions_list.push(i.administrativeDivision);
        }
        return regions_list;
    }
}