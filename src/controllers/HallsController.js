const hallsService = require('../services/HallsService');

class HallsController {
    async GetAll(req, res) {
        res.send(await hallsService.GetAll());
    }

    async GetById(req, res) {
        res.send(await hallsService.GetById(req.params.id))
    }

    async CreateOne(req, res) {
        let hall = {
            name: req.body.name,
            floorCount: req.body.floorCount,
            placeCount: req.body.placeCount
        };

        res.send(await hallsService.CreateOne(hall));
    }

    async EditById(req, res) {
        let hall = {
            name: req.body.name,
            floorCount: req.body.floorCount,
            placeCount: req.body.placeCount
        };

        res.send(await hallsService.EditById(req.params.id, hall));
    }

    async DeleteById(req, res) {
        await hallsService.DeleteById(req.params.id);
        res.send('Ok');
    }
}

module.exports = new HallsController();