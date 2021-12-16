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

    async Create(ticket) {
        return sequelize.models.ticket.create(ticket); // await redundant because is async method and create also async method
    }

    async EditById(ticketId, ticket) {
        await sequelize.models.ticket.update(ticket, {
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
