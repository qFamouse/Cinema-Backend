const express = require('express');
const router = express.Router();

const reviewsController = require('../controllers/ReviewsController');

router.get('/reviews', reviewsController.GetAll);
router.get('/reviews/:id', reviewsController.GetDetailedById);
router.post('/reviews', reviewsController.CreateOne);
router.patch('/reviews/:id', reviewsController.EditById);
router.delete('/reviews/:id', reviewsController.DeleteById);

module.exports = router;