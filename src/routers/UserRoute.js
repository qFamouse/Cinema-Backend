const express = require('express');
const router = express.Router();

const validate = require('../middleware/Validate');
const userScheme = require('../schemes/UserScheme');

const userController = require('../controllers/UserController');

router.get('/', userController.GetAll);
router.get('/:id', userController.GetById);
router.post('/', validate(userScheme.create), userController.CreateOne);
router.patch('/:id', validate(userScheme.edit), userController.EditById);
router.delete('/:id', userController.DeleteById);

module.exports= router;