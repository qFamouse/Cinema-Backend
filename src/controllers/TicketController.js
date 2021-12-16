const ticketService = require('../services/TicketService');

class TicketController {
    async GetAll(req, res) {
        res.send(await ticketService.GetAll());
    }

    async GetDetailedById(req, res) {
        res.send(await ticketService.GetDetailedById(req.params.id))
    }

    async CreateOne(req, res) {
        let ticket = {
            seanceId: req.body.seanceId,
            placeId: req.body.placeId
        };

        res.send(await ticketService.CreateOne(ticket));
    }

    async EditById(req, res) {
        let ticket = {
            seanceId: req.body.seanceId,
            placeId: req.body.placeId
        };

        res.send(await ticketService.EditById(req.params.id, ticket));
    }

    async DeleteById(req, res) {
        await ticketService.DeleteById(req.params.id);
        res.send('Ok');
    }
}

module.exports = new TicketController();