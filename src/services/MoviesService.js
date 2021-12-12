const movieRepository = require('../repositories/MovieRepository');

class MoviesService {
    async GetAll() {
        return await movieRepository.GetAll();
    }
    async GetDetailedById(movieId) {
        return await movieRepository.GetDetailedById(movieId);
    }

    async CreateOne(movie) {
        return await movieRepository.CreateOne(movie)
    }

    async EditById() {

    }

    async DeleteById() {

    }
}

module.exports = new MoviesService();