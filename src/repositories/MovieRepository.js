const Genre = require('../models/Genre');
const Country = require('../models/Countries');
const Movie = require('../models/Movie');

class MovieRepository {
    async GetAll() {
        return await Movie.findAll();
    }

    async GetDetailedById(movieId) {
        return await Movie.findOne({
            include: [Genre, Country],
            where: {
                id: movieId
            }
        });
    }

    async Create(movie) {
        return Movie.create(movie);
    }

    async EditById(movieId, movie) {
        await Movie.update(movie, {
            where: {
                id: movieId
            }
        });

        return await this.GetDetailedById(movieId);
    }

    async DeleteById(movieId) {
        await Movie.destroy({
            where: {
                id: movieId
            }
        });
    }
}

module.exports = new MovieRepository();
