const genresService = require('../services/GenresService');

class GenresController {
    async GetAll(req, res) {
        res.send(await genresService.GetAll());
    }
    async GetById(req, res) {
        res.send(await genresService.GetById(req.params.id));
    }
    async CreateOne(req, res) {
        let genre = {
            name: req.body.name
        };

        res.send(await genresService.CreateOne(genre));
    }

    async EditById(req, res) {
        let genre = {
            name: req.body.name
        };

        res.send(await genresService.EditById(req.params.id, genre));
    }

    async DeleteById(req, res) {
        await genresService.DeleteById(req.params.id);
        res.send('Ok');
    }
}

module.exports = new GenresController();