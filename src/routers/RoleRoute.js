const express = require('express');
const router = express.Router();

const roleController = require('../controllers/RoleController');

router.get('/roles', roleController.GetAll);
router.get('/roles/:id', roleController.GetById);
router.post('/roles', roleController.CreateOne);
router.patch('/roles/:id', roleController.EditById);
router.delete('/roles/:id', roleController.DeleteById);

module.exports = router;