const ticketsService = require('../services/TicketsService');

class TicketsController {
    async GetAll(req, res) {
        res.send(await ticketsService.GetAll());
    }

    async GetDetailedById(req, res) {
        res.send(await ticketsService.GetDetailedById(req.params.id))
    }

    async CreateOne(req, res) {
        let ticket = {
            seanceId: req.body.seanceId,
            placeId: req.body.placeId
        };

        res.send(await ticketsService.CreateOne(ticket));
    }

    async EditById(req, res) {
        let ticket = {
            seanceId: req.body.seanceId,
            placeId: req.body.placeId
        };

        res.send(await ticketsService.EditById(req.params.id, ticket));
    }

    async DeleteById(req, res) {
        await ticketsService.DeleteById(req.params.id);
        res.send('Ok');
    }
}

module.exports = new TicketsController();