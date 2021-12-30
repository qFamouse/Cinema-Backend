const Express = require('./Express');
const Routing = require('./Routing');
const ErrorHandler = require('../middleware/ErrorHandler');

const express = require('express');
const router = express.Router();

router.use(Express);

router.use(Routing);
router.use(ErrorHandler);

module.exports = router;