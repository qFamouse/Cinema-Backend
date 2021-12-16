const sequelize = require('../database/database');

class CountryRepository {
    async GetAll() {
        return await sequelize.models.countries.findAll();
    }

    async GetById(countryId) {
        return await sequelize.models.countries.findOne({
            where: {
                id: countryId
            }
        })
    }

    async Create(country) {
        return sequelize.models.countries.create(country)
    }

    async EditById(countryId, country) {
        await sequelize.models.countries.update(country, {
            where: {
                id: countryId
            }
        });

        // Get data for return //
        return await this.GetById(countryId);
    }

    async DeleteById(countryId) {
        await sequelize.models.role.destroy({
            where: {
                id: countryId
            }
        });
    }
}

module.exports = new CountryRepository();