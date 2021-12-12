const bookingService = require('../services/BookingService');

class BookingController {
    async GetAll(req, res) {
        res.send(await bookingService.GetAll());
    }

    async GetDetailedById(req, res) {
        res.send(await bookingService.GetDetailedById(req.params.id))
    }

    async CreateOne(req, res) {
        let booking = {
            userId: req.body.userId,
            ticketId: req.body.ticketId
        };

        res.send(await bookingService.CreateOne(booking));
    }

    async EditById(req, res) {
        let booking = {
            userId: req.body.userId,
            ticketId: req.body.ticketId
        };

        res.send(await bookingService.EditById(req.params.id, booking));
    }

    async DeleteById(req, res) {
        await bookingService.DeleteById(req.params.id);
        res.send('Ok');
    }
}

module.exports = new BookingController();