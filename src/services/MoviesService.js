const movieRepository = require('../repositories/MovieRepository');

class MoviesService {
    async GetAll() {
        return await movieRepository.GetAll();
    }
    async GetDetailedById(movieId) {
        return await movieRepository.GetDetailedById(movieId);
    }

    async CreateOne(movie) {
        return await movieRepository.CreateOne(movie);
    }

    async EditById(movieId, movie) {
        return await movieRepository.EditById(movieId, movie);
    }

    async DeleteById(movieId) {
        return await movieRepository.DeleteById(movieId);
    }
}

module.exports = new MoviesService();