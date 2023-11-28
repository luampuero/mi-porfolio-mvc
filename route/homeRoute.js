const homeRoute = require('../controller/mainController.js');
const express = require ('express');
const router = express.Router();


router.get('/home',homeRoute.home);

module.exports=router



