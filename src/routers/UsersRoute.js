const express = require('express');
const router = express.Router();

const usersController = require('../controllers/UsersController');

router.get('/users', usersController.GetAll);
router.get('/users/:id', usersController.GetById);
router.post('/users', usersController.CreateOne);
router.get('/test', function (req, res) {
    res.send("Hello World");
})

module.exports= router;