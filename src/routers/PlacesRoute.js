const express = require('express');
const router = express.Router();

const placesController = require('../controllers/PlacesController');

router.get('/places', placesController.GetAll);
router.get('/places/:id', placesController.GetDetailedById);
router.post('/places', placesController.CreateOne);
router.patch('/places/:id', placesController.EditById);
router.delete('/places/:id', placesController.DeleteById);

module.exports = router;