const placeRepository = require('../repositories/PlaceRepository');
const hallRepository = require('../repositories/HallRepository');
// errors //
const NotFoundError = require('../errors/NotFoundError');
const BadRequestError = require('../errors/BadRequestError');

class PlaceService {
    async GetAll() {
        return await placeRepository.GetAll();
    }

    async GetDetailedById(placeId) {
        return await placeRepository.GetDetailedById(placeId);
    }

    async Create(place) {
        if (await placeRepository.GetOneByQuery(place)) {
            throw new BadRequestError('Place already exists');
        }

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
            throw new NotFoundError('No such place')
        }
    }
}

module.exports = new PlaceService();