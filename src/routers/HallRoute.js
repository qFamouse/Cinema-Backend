const express = require('express');
const router = express.Router();

const hallController = require('../controllers/HallController');

router.get('/halls', hallController.GetAll);
router.get('/halls/:id', hallController.GetById);
router.post('/halls', hallController.CreateOne);
router.patch('/halls/:id', hallController.EditById);
router.delete('/halls/:id', hallController.DeleteById);

module.exports = router;