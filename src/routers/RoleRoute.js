const express = require('express');
const router = express.Router();

const roleController = require('../controllers/RoleController');

router.get('/', roleController.GetAll);
router.get('/:id', roleController.GetById);
router.post('/', roleController.CreateOne);
router.patch('/:id', roleController.EditById);
router.delete('/:id', roleController.DeleteById);

module.exports = router;