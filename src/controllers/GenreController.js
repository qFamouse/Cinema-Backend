const genreService = require('../services/GenreService');

class GenreController {
    async GetAll(req, res) {
        res.send(await genreService.GetAll());
    }
    async GetById(req, res) {
        res.send(await genreService.GetById(req.params.id));
    }
    async CreateOne(req, res) {
        let genre = {
            name: req.body.name
        };

        res.send(await genreService.CreateOne(genre));
    }

    async EditById(req, res) {
        let genre = {
            name: req.body.name
        };

        res.send(await genreService.EditById(req.params.id, genre));
    }

    async DeleteById(req, res) {
        await genreService.DeleteById(req.params.id);
        res.send('Ok');
    }
}

module.exports = new GenreController();