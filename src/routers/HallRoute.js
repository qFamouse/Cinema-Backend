const express = require('express');
const router = express.Router();

const hallController = require('../controllers/HallController');

router.get('/', hallController.GetAll);
router.get('/:id', hallController.GetById);
router.post('/', hallController.CreateOne);
router.patch('/:id', hallController.EditById);
router.delete('/:id', hallController.DeleteById);

module.exports = router;