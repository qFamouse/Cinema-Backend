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

    async CreateOne(movie) {
        movie = await sequelize.models.movie.create({
            title: movie.title,
            genreId: movie.genreId,
            poster: movie.poster,
            duration: movie.duration,
            ageLimit: movie.ageLimit,
            date: movie.date,
            countryId: movie.countryId,
            director: movie.director,
            actors: movie.actors,
            synopsis: movie.synopsis,
            startRentalDate: movie.startRentalDate,
            endRentalDate: movie.endRentalDate,
            createdAt: Date.now(),
            updatedAt: Date.now()
        });

        return movie;
    }

    async EditById(movieId, movie) {
        await sequelize.models.movie.update({
            title: movie.title,
            genreId: movie.genreId,
            poster: movie.poster,
            duration: movie.duration,
            ageLimit: movie.ageLimit,
            date: movie.date,
            countryId: movie.countryId,
            director: movie.director,
            actors: movie.actors,
            synopsis: movie.synopsis,
            startRentalDate: movie.startRentalDate,
            endRentalDate: movie.endRentalDate,
            updatedAt: Date.now()
        }, {
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
