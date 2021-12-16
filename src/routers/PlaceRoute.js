const express = require('express');
const router = express.Router();

const placeController = require('../controllers/PlaceController');

router.get('/', placeController.GetAll);
router.get('/:id', placeController.GetDetailedById);
router.post('/', placeController.CreateOne);
router.patch('/:id', placeController.EditById);
router.delete('/:id', placeController.DeleteById);

module.exports = router;