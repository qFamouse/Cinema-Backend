const express = require('express');
const router = express.Router();

const rolesController = require('../controllers/RolesController');

router.get('/roles', rolesController.GetAll);
router.get('/roles/:id', rolesController.GetById);
router.post('/roles', rolesController.CreateOne);
router.patch('/roles/:id', rolesController.EditById);
router.delete('/roles/:id', rolesController.DeleteById);

module.exports = router;