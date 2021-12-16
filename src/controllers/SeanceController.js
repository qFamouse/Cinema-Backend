const seanceService = require('../services/SeanceService');

class SeanceController {
    async GetAll(req, res) {
        res.send(await seanceService.GetAll());
    }

    async GetDetailedById(req, res) {
        res.send(await seanceService.GetDetailedById(req.params.id))
    }

    async CreateOne(req, res) {
        let seance = {
            hallId: req.body.hallId,
            movieId: req.body.movieId,
            date: req.body.date
        };

        res.send(await seanceService.CreateOne(seance));
    }

    async EditById(req, res) {
        let seance = {
            hallId: req.body.hallId,
            movieId: req.body.movieId,
            date: req.body.date
        };

        res.send(await seanceService.EditById(req.params.id, seance));
    }

    async DeleteById(req, res) {
        await seanceService.DeleteById(req.params.id);
        res.send('Ok');
    }
}

module.exports = new SeanceController();