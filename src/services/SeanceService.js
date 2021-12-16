const seanceRepository = require('../repositories/SeancesRepository');

class SeanceService {
    async GetAll() {
        return await seanceRepository.GetAll();
    }

    async GetDetailedById(seanceId) {
        return await seanceRepository.GetDetailedById(seanceId);
    }

    async CreateOne(seance) {
        return await seanceRepository.CreateOne(seance);
    }

    async EditById(seanceId, seance) {
        return await seanceRepository.EditById(seanceId, seance);
    }

    async DeleteById(seanceId) {
        return await seanceRepository.DeleteById(seanceId);
    }
}

module.exports = new SeanceService();