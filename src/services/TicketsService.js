const ticketRepository = require('../repositories/TicketRepository');

class TicketsService {
    async GetAll() {
        return await ticketRepository.GetAll();
    }

    async GetDetailedById(ticketId) {
        return await ticketRepository.GetDetailedById(ticketId);
    }

    async CreateOne(ticket) {
        return await ticketRepository.CreateOne(ticket);
    }

    async EditById(ticketId, ticket) {
        return await ticketRepository.EditById(ticketId, ticket);
    }

    async DeleteById(ticketId) {
        return await ticketRepository.DeleteById(ticketId);
    }
}

module.exports = new TicketsService();