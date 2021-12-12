const sequelize = require('../database/database');
const Seance = require('../models/Seance');
const Place = require('../models/Place');

class TicketRepository {
    async GetAll() {
        return await sequelize.models.ticket.findAll();
    }

    async GetDetailedById(ticketId) {
        return await sequelize.models.ticket.findOne({
            include: [Seance, Place],
            where: {
                id: ticketId
            }
        });
    }

    async CreateOne(ticket) {
        return await sequelize.models.ticket.create({
            seanceId: ticket.seanceId,
            placeId: ticket.placeId
        });
    }

    async EditById(ticketId, ticket) {
        await sequelize.models.ticket.update({
            seanceId: ticket.seanceId,
            placeId: ticket.placeId
        }, {
            where: {
                id: ticketId
            }
        });

        return await this.GetDetailedById(ticketId);
    }

    async DeleteById(ticketId) {
        await sequelize.models.ticket.destroy({
            where: {
                id: ticketId
            }
        });
    }
}

module.exports = new TicketRepository();
