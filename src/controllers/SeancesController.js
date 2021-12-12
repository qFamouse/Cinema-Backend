const seancesService = require('../services/SeancesService');

class SeancesController {
    async GetAll(req, res) {
        res.send(await seancesService.GetAll());
    }

    async GetDetailedById(req, res) {
        res.send(await seancesService.GetDetailedById(req.params.id))
    }

    async CreateOne(req, res) {
        let seance = {
            hallId: req.body.hallId,
            movieId: req.body.movieId,
            date: req.body.date
        };

        res.send(await seancesService.CreateOne(seance));
    }

    async EditById(req, res) {
        let seance = {
            hallId: req.body.hallId,
            movieId: req.body.movieId,
            date: req.body.date
        };

        res.send(await seancesService.EditById(req.params.id, seance));
    }

    async DeleteById(req, res) {
        await seancesService.DeleteById(req.params.id);
        res.send('Ok');
    }
}

module.exports = new SeancesController();