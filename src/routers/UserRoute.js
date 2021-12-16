const express = require('express');
const router = express.Router();

const validate = require('../middleware/Validate');
const UserScheme = require('../schemes/UserScheme');

const userController = require('../controllers/UserController');

router.get('/users', userController.GetAll);
router.get('/users/:id', userController.GetById);
router.post('/users', validate(UserScheme.create), userController.CreateOne);
router.patch('/users/:id', validate(UserScheme.edit), userController.EditById);
router.delete('/users/:id', userController.DeleteById);

module.exports= router;