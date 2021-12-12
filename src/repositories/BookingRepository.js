const sequelize = require('../database/database');
const User = require('../models/User');
const Ticket = require('../models/Ticket');


class BookingRepository {
    async GetAll() {
        return await sequelize.models.booking.findAll();
    }

    async GetDetailedById(bookingId) {
        return await sequelize.models.booking.findOne({
            include: [User, Ticket],
            where: {
                id: bookingId
            }
        });
    }

    async CreateOne(booking) {
        return await sequelize.models.booking.create({
            userId: booking.userId,
            ticketId: booking.ticketId
        });
    }

    async EditById(bookingId, booking) {
        await sequelize.models.booking.update({
            userId: booking.userId,
            ticketId: booking.ticketId
        }, {
            where: {
                id: bookingId
            }
        });

        return await this.GetDetailedById(bookingId);
    }

    async DeleteById(bookingId) {
        await sequelize.models.booking.destroy({
            where: {
                id: bookingId
            }
        });
    }
}

module.exports = new BookingRepository();
