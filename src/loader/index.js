const Express = require('./Express');
// const Passport = require('./passport')
const Routing = require('./Routing');

const express = require('express');
const router = express.Router();

router.use(Express);
router.use(Routing);

module.exports = router;