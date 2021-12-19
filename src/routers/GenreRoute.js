const express = require('express');
const router = express.Router();

const validate = require('../middleware/Validate');
const genreScheme = require('../schemes/GenreScheme');

const isAuthorize = require('../middleware/IsAuthorize');

const genreController = require('../controllers/GenreController');

router.use(isAuthorize);
router.get('/', genreController.GetAll);
router.get('/:id', genreController.GetById);
router.post('/', validate(genreScheme.create), genreController.Create);
router.patch('/:id', validate(genreScheme.edit), genreController.EditById);
router.delete('/:id', genreController.DeleteById);

module.exports= router;