const express = require('express')

const routes = express.Router();
const controller = require('../controllers/product_controller');

routes.get('/', controller.productGetFormController)
// routes.post('/',controller.addCategoryController);


module.exports = routes;