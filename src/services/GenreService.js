const genreRepository = require('../repositories/GenreRepository');

class GenreService {
    async GetAll() {
        return await genreRepository.GetAll();
    }
    async GetById(genreId) {
        return await genreRepository.GetById(genreId);
    }

    async CreateOne(genre) {
        return await genreRepository.CreateOne(genre);
    }

    async EditById(genreId, genre) {
        return await genreRepository.EditById(genreId, genre);
    }

    async DeleteById(genreId) {
        return await genreRepository.DeleteById(genreId);
    }
}

module.exports = new GenreService();