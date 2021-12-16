const sequelize = require('../database/database');

const Movie = require('../models/Movie');
const Hall = require('../models/Hall');

class SeanceRepository {
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

    async Create(seance) {
        return sequelize.models.seance.create(seance);
    }

    async EditById(seanceId, seance) {
        await sequelize.models.seance.update(seance, {
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

module.exports = new SeanceRepository();