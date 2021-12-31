const movieRepository = require('../repositories/MovieRepository');

class MovieService {
    async GetAll() {
        return await movieRepository.GetAll();
    }

    async GetDetailedById(movieId) {
        return await movieRepository.GetDetailedById(movieId);
    }

    async Create(movie) {
        return await movieRepository.Create(movie);
    }

    async EditById(movieId, movie) {
        return await movieRepository.EditById(movieId, movie);
    }

    async DeleteById(movieId) {
        return await movieRepository.DeleteById(movieId);
    }
}

module.exports = new MovieService();