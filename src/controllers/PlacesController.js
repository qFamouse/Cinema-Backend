const placesService = require('../services/PlacesService');

class PlacesController {
    async GetAll(req, res) {
        res.send(await placesService.GetAll());
    }

    async GetDetailedById(req, res) {
        res.send(await placesService.GetDetailedById(req.params.id))
    }

    async CreateOne(req, res) {
        let place = {
            hallId: req.body.hallId,
            floor: req.body.floor,
            seat: req.body.seat,
            row: req.body.row,
            isVip: req.body.isVip
        };

        res.send(await placesService.CreateOne(place));
    }

    async EditById(req, res) {
        let place = {
            hallId: req.body.hallId,
            floor: req.body.floor,
            seat: req.body.seat,
            row: req.body.row,
            isVip: req.body.isVip
        };

        res.send(await placesService.EditById(req.params.id, place));
    }

    async DeleteById(req, res) {
        await placesService.DeleteById(req.params.id);
        res.send('Ok');
    }
}

module.exports = new PlacesController();