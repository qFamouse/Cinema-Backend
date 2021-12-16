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

    async CreateOne(place) {
        return await sequelize.models.place.create({
            hallId: place.hallId,
            floor: place.floor,
            seat: place.seat,
            row: place.row,
            isVip: place.isVip
        });
    }

    async EditById(placeId, place) {
        await sequelize.models.place.update({
            hallId: place.hallId,
            floor: place.floor,
            seat: place.seat,
            row: place.row,
            isVip: place.isVip
        }, {
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
