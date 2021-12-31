const Countries = require('../models/Countries');

class CountryRepository {
    async GetAll() {
        return await Countries.findAll();
    }

    async GetById(countryId) {
        return await Countries.findOne({
            where: {
                id: countryId
            }
        })
    }

    async Create(country) {
        return Countries.create(country)
    }

    async EditById(countryId, country) {
        await Countries.update(country, {
            where: {
                id: countryId
            }
        });

        // Get data for return //
        return await this.GetById(countryId);
    }

    async DeleteById(countryId) {
        await Countries.destroy({
            where: {
                id: countryId
            }
        });
    }
}

module.exports = new CountryRepository();