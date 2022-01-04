class PlaceRepository {
    GetAll() {
        return 'dsdasd';
    }

    async GetById(placeId) {
        // return await sequelize.models.place.findOne({
        //     where: { id: placeId }
        // });
    }

    async GetDetailedById(placeId) {
        // return await sequelize.models.place.findOne({
        //     include: [Hall],
        //     where: {
        //         id: placeId
        //     }
        // });
    }

    async Create(place) {
        console.log('ssssssssssssssssssssssssssssssssssssssss');
        return "Aboba";
        // return sequelize.models.place.create(place);
    }

    async EditById(placeId, place) {
        // await sequelize.models.place.update(place, {
        //     where: {
        //         id: placeId
        //     }
        // });

        // return await this.GetDetailedById(placeId);
    }

    async DeleteById(placeId) {
        // await sequelize.models.place.destroy({
        //     where: {
        //         id: placeId
        //     }
        // });
    }
}

module.exports = new PlaceRepository();
