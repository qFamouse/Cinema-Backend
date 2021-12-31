const User = require('../models/User');
const Ticket = require('../models/Ticket');
const Booking = require('../models/Booking');


class BookingRepository {
    async GetAll() {
        return await Booking.findAll();
    }

    async GetDetailedById(bookingId) {
        return await Booking.findOne({
            include: [User, Ticket],
            where: {
                id: bookingId
            }
        });
    }

    async Create(booking) {
        return Booking.create(booking);
    }

    async EditById(bookingId, booking) {
        await Booking.update(booking, {
            where: {
                id: bookingId
            }
        });

        return await this.GetDetailedById(bookingId);
    }

    async DeleteById(bookingId) {
        await Booking.destroy({
            where: {
                id: bookingId
            }
        });
    }
}

module.exports = new BookingRepository();
