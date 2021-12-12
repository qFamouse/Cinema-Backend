const sequelize = require('../database/database');
const Movie = require('../models/Movie');
const User = require('../models/User');

class ReviewsRepository {
    async GetAll() {
        return await sequelize.models.review.findAll();
    }

    async GetDetailedById(reviewId) {
        return await sequelize.models.review.findOne({
            include: [Movie, User],
            where: {
                id: reviewId
            }
        });
    }

    async CreateOne(review) {
        return await sequelize.models.review.create({
            movieId: review.movieId,
            userId: review.userId,
            rating: review.rating,
            review: review.review,
            createdAt: Date.now(),
            updatedAt: Date.now()
        });
    }

    async EditById(reviewId, review) {
        await sequelize.models.review.update({
            movieId: review.movieId,
            userId: review.userId,
            rating: review.rating,
            review: review.review,
            updatedAt: Date.now()
        }, {
            where: {
                id: reviewId
            }
        });

        return await this.GetDetailedById(reviewId);
    }

    async DeleteById(reviewId) {
        await sequelize.models.review.destroy({
            where: {
                id: reviewId
            }
        });
    }
}

module.exports = new ReviewsRepository();
