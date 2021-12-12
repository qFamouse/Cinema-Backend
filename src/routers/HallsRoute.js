const express = require('express');
const router = express.Router();

const hallsController = require('../controllers/HallsController');

router.get('/halls', hallsController.GetAll);
router.get('/halls/:id', hallsController.GetById);
router.post('/halls', hallsController.CreateOne);
router.patch('/halls/:id', hallsController.EditById);
router.delete('/halls/:id', hallsController.DeleteById);

module.exports = router;