const placeRepository = require('../repositories/PlaceRepository');
const hallRepository = require('../repositories/HallRepository');

// Errors //
const NotFondError = require('../Errors/NotFoundError');

class PlaceService {
    async GetAll() {
        return await placeRepository.GetAll();
    }

    async GetDetailedById(placeId) {
        return await placeRepository.GetDetailedById(placeId);
    }

    async CreateOne(place) {
        place = await placeRepository.Create(place);

        if (place) {
            await hallRepository.IncreaseSeatById(place.hallId);
        }

        return place
    }

    async EditById(placeId, place) {
        return await placeRepository.EditById(placeId, place);
    }

    async DeleteById(placeId) {
        let place = await placeRepository.GetById(placeId);
        console.log(place)
        if (place) {
            await placeRepository.DeleteById(placeId);
            await hallRepository.DecreaseSeatById(place.hallId);
        }
        else {
            throw new NotFondError('No such place')
        }
    }
}

module.exports = new PlaceService();