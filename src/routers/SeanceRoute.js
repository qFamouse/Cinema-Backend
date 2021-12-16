const express = require('express');
const router = express.Router();

const seanceController = require('../controllers/SeanceController');

router.get('/seances', seanceController.GetAll);
router.get('/seances/:id', seanceController.GetDetailedById);
router.post('/seances', seanceController.CreateOne);
router.patch('/seances/:id', seanceController.EditById);
router.delete('/seances/:id', seanceController.DeleteById);

module.exports = router;