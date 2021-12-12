const placeRepository = require('../repositories/PlacesRepository');

class PlacesService {
    async GetAll() {
        return await placeRepository.GetAll();
    }

    async GetDetailedById(placeId) {
        return await placeRepository.GetDetailedById(placeId);
    }

    async CreateOne(place) {
        return await placeRepository.CreateOne(place);
    }

    async EditById(placeId, place) {
        return await placeRepository.EditById(placeId, place);
    }

    async DeleteById(placeId) {
        return await placeRepository.DeleteById(placeId);
    }
}

module.exports = new PlacesService();