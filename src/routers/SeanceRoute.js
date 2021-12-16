const express = require('express');
const router = express.Router();

const seanceController = require('../controllers/SeanceController');

router.get('/', seanceController.GetAll);
router.get('/:id', seanceController.GetDetailedById);
router.post('/', seanceController.CreateOne);
router.patch('/:id', seanceController.EditById);
router.delete('/:id', seanceController.DeleteById);

module.exports = router;