const express = require('express');
const router = express.Router();

const reviewController = require('../controllers/ReviewController');

router.get('/', reviewController.GetAll);
router.get('/:id', reviewController.GetDetailedById);
router.post('/', reviewController.CreateOne);
router.patch('/:id', reviewController.EditById);
router.delete('/:id', reviewController.DeleteById);

module.exports = router;