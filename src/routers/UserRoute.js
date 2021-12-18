const express = require('express');
const router = express.Router();

const validate = require('../middleware/Validate');
const isAuthorize = require('../middleware/IsAuthorize');

const userScheme = require('../schemes/UserScheme');

const userController = require('../controllers/UserController');

router.get('/', isAuthorize,  userController.GetAll);
router.get('/login', userController.Login);
router.get('/:id', userController.GetById);
router.post('/', validate(userScheme.create), userController.CreateOne);
router.patch('/:id', validate(userScheme.edit), userController.EditById);
router.delete('/:id', userController.DeleteById);
router.post('/register', userController.Register);

module.exports= router;