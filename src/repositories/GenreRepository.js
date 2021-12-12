const sequelize = require('../database/database');

class GenreRepository {
    async GetAll() {
        return await sequelize.models.genre.findAll();
    }

    async GetById(genreId) {
        return await sequelize.models.genre.findOne({
            where: {
                id: genreId
            }
        });
    }

    async CreateOne(genre) {
        return await sequelize.models.genre.create({
            name: genre.name
        })
    }

    async EditById(genreId, genre) {
        await sequelize.models.genre.update({
            name: genre.name
        }, {
            where: {
                id: genreId
            }
        });

        // Get data for return //
        return await this.GetById(genreId);
    }

    async DeleteById(genreId) {
        await sequelize.models.genre.destroy({
            where: {
                id: genreId
            }
        });
    }
}

module.exports = new GenreRepository();