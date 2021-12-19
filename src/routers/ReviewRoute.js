const express = require('express');
const router = express.Router();

const validate = require('../middleware/Validate');
const reviewScheme = require('../schemes/ReviewScheme');

const reviewController = require('../controllers/ReviewController');

router.get('/', reviewController.GetAll);
router.get('/:id', reviewController.GetDetailedById);
router.post('/', validate(reviewScheme.create), reviewController.CreateOne);
router.patch('/:id', validate(reviewScheme.edit), reviewController.EditById);
router.delete('/:id', reviewController.DeleteById);

module.exports = router;