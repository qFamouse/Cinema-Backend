const express = require('express');
const router = express.Router();

const placeController = require('../controllers/PlaceController');

router.get('/places', placeController.GetAll);
router.get('/places/:id', placeController.GetDetailedById);
router.post('/places', placeController.CreateOne);
router.patch('/places/:id', placeController.EditById);
router.delete('/places/:id', placeController.DeleteById);

module.exports = router;