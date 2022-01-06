const ticketRepository = require('../repositories/TicketRepository');
const BadRequestError = require("../Errors/BadRequestError");

class TicketService {
    async GetAll() {
        return await ticketRepository.GetAll();
    }

    async GetDetailedById(ticketId) {
        return await ticketRepository.GetDetailedById(ticketId);
    }

    async Create(ticket) {
        if (await ticketRepository.GetOneByQuery(ticket)) {
            throw new BadRequestError('Ticket already exists');
        }

        return await ticketRepository.Create(ticket);
    }

    async EditById(ticketId, ticket) {
        return await ticketRepository.EditById(ticketId, ticket);
    }

    async DeleteById(ticketId) {
        return await ticketRepository.DeleteById(ticketId);
    }
}

module.exports = new TicketService();