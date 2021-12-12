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

    async CreateOne(country) {
        return await sequelize.models.countries.create({
            name: country.name
        })
    }

    async EditById(countryId, country) {
        await sequelize.models.countries.update({
            name: country.name
        }, {
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