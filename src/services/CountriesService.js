const countryRepository = require('../repositories/CountryRepository');

class CountriesService {
    async GetAll() {
        return await countryRepository.GetAll();
    }
    async GetById(countryId) {
        return await countryRepository.GetById(countryId);
    }

    async CreateOne(country) {
        return await countryRepository.CreateOne(country);
    }

    async EditById(countryId, country) {
        return await countryRepository.EditById(countryId, country);
    }

    async DeleteById(countryId) {
        return await countryRepository.DeleteById(countryId);
    }
}

module.exports = new CountriesService();