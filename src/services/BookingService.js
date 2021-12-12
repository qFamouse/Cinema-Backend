const bookingRepository = require('../repositories/BookingRepository');

class BookingService {
    async GetAll() {
        return await bookingRepository.GetAll();
    }

    async GetDetailedById(bookingId) {
        return await bookingRepository.GetDetailedById(bookingId);
    }

    async CreateOne(booking) {
        return await bookingRepository.CreateOne(booking);
    }

    async EditById(bookingId, booking) {
        return await bookingRepository.EditById(bookingId, booking);
    }

    async DeleteById(bookingId) {
        return await bookingRepository.DeleteById(bookingId);
    }
}

module.exports = new BookingService();