const express = require('express');
const router = express.Router();

const reviewController = require('../controllers/ReviewController');

router.get('/reviews', reviewController.GetAll);
router.get('/reviews/:id', reviewController.GetDetailedById);
router.post('/reviews', reviewController.CreateOne);
router.patch('/reviews/:id', reviewController.EditById);
router.delete('/reviews/:id', reviewController.DeleteById);

module.exports = router;