const express = require('express')

const routes = express.Router();
const controller = require('../controllers/category_controller');

routes.get('/', controller.categoryGetFormController)
// routes.post('/',controller.addCategoryController);
routes.get("/list", controller.getCategoryList);

routes.post('/',controller.addCategoryController);
routes.get("/:id", controller.getCategoryList);
routes.post("/id",controller.updateCategoryById);


module.exports = routes;
