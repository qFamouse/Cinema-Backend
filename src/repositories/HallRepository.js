const sequelize = require('../database/database');

class HallRepository {
    async GetAll() {
        return await sequelize.models.hall.findAll();
    }

    async GetById(hallId) {
        return await sequelize.models.hall.findOne({
            where: {
                id: hallId
            }
        })
    }

    async CreateOne(hall) {
        return await sequelize.models.hall.create({
            name: hall.name,
            floorCount: hall.floorCount,
            placeCount: hall.placeCount
        })
    }

    async EditById(hallId, hall) {
        await sequelize.models.hall.update({
            name: hall.name,
            floorCount: hall.floorCount,
            placeCount: hall.placeCount
        }, {
            where: {
                id: hallId
            }
        });

        return await this.GetById(hallId);
    }

    async DeleteById(hallId) {
        await sequelize.models.movie.destroy({
            where: {
                id: hallId
            }
        });
    }
}

module.exports = new HallRepository();
