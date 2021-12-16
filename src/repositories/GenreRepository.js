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

    async Create(genre) {
        return sequelize.models.genre.create(genre)
    }

    async EditById(genreId, genre) {
        await sequelize.models.genre.update(genre, {
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