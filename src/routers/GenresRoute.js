const express = require('express');
const router = express.Router();

const genresController = require('../controllers/GenresController');

router.get('/genres', genresController.GetAll);
router.get('/genres/:id', genresController.GetById);
router.post('/genres', genresController.CreateOne);
router.patch('/genres/:id', genresController.EditById);
router.delete('/genres/:id', genresController.DeleteById);

module.exports= router;