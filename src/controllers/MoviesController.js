const moviesService = require('../services/MoviesService');

class MoviesController {
    async GetAll(req, res) {
        res.send(await moviesService.GetAll());
    }

    async GetById(req, res) {
        res.send(await moviesService.GetDetailedById(req.params.id))
    }

    async CreateOne(req, res) {
        let movie = {
            title: req.body.title,
            genreId: req.body.genreId,
            poster: req.body.poster,
            duration: req.body.duration,
            ageLimit: req.body.ageLimit,
            date: req.body.date,
            countryId: req.body.countryId,
            director: req.body.director,
            actors: req.body.actors,
            synopsis: req.body.synopsis,
            startRentalDate: req.body.startRentalDate,
            endRentalDate: req.body.endRentalDate
        };

        res.send(await moviesService.CreateOne(movie));
    }

    async EditById(req, res) {
        let movie = {
            title: req.body.title,
            genreId: req.body.genreId,
            poster: req.body.poster,
            duration: req.body.duration,
            ageLimit: req.body.ageLimit,
            date: req.body.date,
            countryId: req.body.countryId,
            director: req.body.director,
            actors: req.body.actors,
            synopsis: req.body.synopsis,
            startRentalDate: req.body.startRentalDate,
            endRentalDate: req.body.endRentalDate
        };

        res.send(await moviesService.EditById(req.params.id, movie));
    }

    async DeleteById(req, res) {
        await moviesService.DeleteById(req.params.id);
        res.send('Ok');
    }
}

module.exports = new MoviesController();