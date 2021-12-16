const sequelize = require('../database/database');
const Genre = require('../models/Genre');
const Country = require('../models/Countries');

class MovieRepository {
    async GetAll() {
        return await sequelize.models.movie.findAll();
    }

    async GetDetailedById(movieId) {
        return await sequelize.models.movie.findOne({
            include: [Genre, Country],
            where: {
                id: movieId
            }
        });
    }

    async Create(movie) {
        return sequelize.models.movie.create(movie);
    }

    async EditById(movieId, movie) {
        await sequelize.models.movie.update(movie, {
            where: {
                id: movieId
            }
        });

        return await this.GetDetailedById(movieId);
    }

    async DeleteById(movieId) {
        await sequelize.models.movie.destroy({
            where: {
                id: movieId
            }
        });
    }
}

module.exports = new MovieRepository();
