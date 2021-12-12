const reviewsService = require('../services/ReviewsService');

class ReviewsController {
    async GetAll(req, res) {
        res.send(await reviewsService.GetAll());
    }

    async GetDetailedById(req, res) {
        res.send(await reviewsService.GetDetailedById(req.params.id))
    }

    async CreateOne(req, res) {
        let review = {
            movieId: req.body.movieId,
            userId: req.body.userId,
            rating: req.body.rating,
            review: req.body.review
        };

        res.send(await reviewsService.CreateOne(review));
    }

    async EditById(req, res) {
        let review = {
            movieId: req.body.movieId,
            userId: req.body.userId,
            rating: req.body.rating,
            review: req.body.review
        };

        res.send(await reviewsService.EditById(req.params.id, review));
    }

    async DeleteById(req, res) {
        await reviewsService.DeleteById(req.params.id);
        res.send('Ok');
    }
}

module.exports = new ReviewsController();