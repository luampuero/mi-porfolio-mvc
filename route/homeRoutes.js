const homeRouter = require('../controller/mainController.js');
const express = require ('express');
const router = express.router();

router.get('/home.html,homeRouter');

module.exports = router;