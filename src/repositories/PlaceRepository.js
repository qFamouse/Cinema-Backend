const sequelize = require('../database/database');
const Hall = require("../models/Hall");

class PlaceRepository {
    async GetAll() {
        return await sequelize.models.place.findAll();
    }

    async GetDetailedById(placeId) {
        return await sequelize.models.place.findOne({
            include: [Hall],
            where: {
                id: placeId
            }
        });
    }

    async Create(place) {
        return sequelize.models.place.create(place);
    }

    async EditById(placeId, place) {
        await sequelize.models.place.update(place, {
            where: {
                id: placeId
            }
        });

        return await this.GetDetailedById(placeId);
    }

    async DeleteById(placeId) {
        await sequelize.models.place.destroy({
            where: {
                id: placeId
            }
        });
    }
}

module.exports = new PlaceRepository();
