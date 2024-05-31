const categoryModel = require("../model/category_model");
const categoryGetFormController = (req, res) => {
    res.render('category')
};
const addCategoryController = async (req, res) => {
    try {
        const data = await categoryModel.addCategory(req.body);
        if (data) {
            return res.redirect("/category/list");
        }

    } catch (error) {
        console.log(error);
    }
};

const getCategoryList = async (req, res) => {
    try {
        const data = await categoryModel.getCategory();

        return res.render("category_list", { categoryList: data });

    } catch (error) {
        console.log(error);
    }
};

const editCategoryList = async (req, res) => {
    try {
        console.id = req.params.id;
        const data = await categoryModel.editCategoryList(id, req.body);

    } catch (error) {
        console.log(error);

    }
};


const getByIdCategory = async (req, res) => {
    try {

        const data = await categoryModel.getByIdCategory();
        res.render("category", { data: data[0] });
    } catch (error) {
        console.log(error);
    }
}
module.exports = {
    categoryGetFormController,
    addCategoryController,
    getCategoryList,
    getCategoryList

};
