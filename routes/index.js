const express = require('express')
const routes = express.Router()
const controller = require('../controllers/index_controller')


routes.get('/',controller.indexcontroller);

module.exports= routes;



