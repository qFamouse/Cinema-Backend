const express = require('express');
const router = express.Router();

const validate = require('../middleware/Validate');
const UserScheme = require('../Schemes/UserScheme');

const usersController = require('../controllers/UsersController');

router.get('/users', usersController.GetAll);
router.get('/users/:id', usersController.GetById);
router.post('/users', validate(UserScheme.create), usersController.CreateOne);
router.patch('/users/:id', validate(UserScheme.edit), usersController.EditById);
router.delete('/users/:id', usersController.DeleteById);

module.exports= router;