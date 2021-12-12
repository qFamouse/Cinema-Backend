const express = require('express');
const router = express.Router();

const seancesController = require('../controllers/SeancesController');

router.get('/seances', seancesController.GetAll);
router.get('/seances/:id', seancesController.GetDetailedById);
router.post('/seances', seancesController.CreateOne);
router.patch('/seances/:id', seancesController.EditById);
router.delete('/seances/:id', seancesController.DeleteById);

module.exports = router;