const bookingRepository = require('../repositories/BookingRepository');
const ticketRepository = require('../repositories/TicketRepository');
const NotFoundError = require("../errors/NotFoundError");

class BookingService {
    async GetAll() {
        return await bookingRepository.GetAll();
    }

    async GetDetailedById(bookingId) {
        return await bookingRepository.GetDetailedById(bookingId);
    }

    async Create(bookingData) {
        let booking = await bookingRepository.Create(bookingData);

        await ticketRepository.EditById(booking.ticketId, {
            isOccupied: true
        })

        return booking;
    }

    async EditById(bookingId, booking) {
        return await bookingRepository.EditById(bookingId, booking);
    }

    async DeleteById(bookingId) {
        let booking = await bookingRepository.GetById(bookingId);
        if (booking) {
            let ticketId = booking.ticketId;
            await bookingRepository.DeleteById(bookingId);

            await ticketRepository.EditById(ticketId, {
                isOccupied: true
            })
        }
        else {
            throw new NotFoundError('Booking is not found');
        }
    }
}

module.exports = new BookingService();
