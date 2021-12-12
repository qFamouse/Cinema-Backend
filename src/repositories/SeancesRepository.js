const sequelize = require('../database/database');

const Movie = require('../models/Movie');
const Hall = require('../models/Hall');

class SeancesRepository {
    async GetAll() {
        return await sequelize.models.seance.findAll();
    }

    async GetDetailedById(seanceId) {
        return await sequelize.models.seance.findOne({
            include: [Movie, Hall],
            where: {
                id: seanceId
            }
        });
    }

    async CreateOne(seance) {
        return await sequelize.models.seance.create({
            hallId: seance.hallId,
            movieId: seance.movieId,
            date: seance.date,
            createdAt: Date.now(),
            updatedAt: Date.now()
        });
    }

    async EditById(seanceId, seance) {
        await sequelize.models.seance.update({
            hallId: seance.hallId,
            movieId: seance.movieId,
            date: seance.date,
            updatedAt: Date.now()
        }, {
            where: {
                id: seanceId
            }
        });

        return await this.GetDetailedById(seanceId);
    }

    async DeleteById(seanceId) {
        await sequelize.models.seance.destroy({
            where: {
                id: seanceId
            }
        });
    }
}

module.exports = new SeancesRepository();