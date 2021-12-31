const Genre = require('../models/Genre');

class GenreRepository {
    async GetAll() {
        return await Genre.findAll();
    }

    async GetById(genreId) {
        return await Genre.findOne({
            where: {
                id: genreId
            }
        });
    }

    async Create(genre) {
        return Genre.create(genre)
    }

    async EditById(genreId, genre) {
        await Genre.update(genre, {
            where: {
                id: genreId
            }
        });

        // Get data for return //
        return await this.GetById(genreId);
    }

    async DeleteById(genreId) {
        await Genre.destroy({
            where: {
                id: genreId
            }
        });
    }
}

module.exports = new GenreRepository();