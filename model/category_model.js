const db = require("../connection/db");

function getCategory() {
    return new Promise((resolve, reject) => {
        db.query("Select * from category_table", (error, elements) => {
            if (error) {
                return reject(error);
            }
            return resolve(elements);
        });
    });
}

function addCategory(data) {
    const { category_name } = data;
    return new Promise(
        (resolve, reject) => {
            db.query("insert into category_table(category_name) VALUES (?)", (category_name),
                (error, elements) => {
                    if (error) {
                        return reject(error);
                    }
                    return resolve(elements);
                });
        });

}

function getCategoryById(id) {
    const id = data.params.id;
    return new Promise((resolve, reject) => {
        db.query("SELECT * from category_table where id =?", [id], (error, elements) => {
            if (error) {
            } return reject(error);

            return resolve(elements);
        })
    })
};

function updateCategoryById(params, body) {
    const { id } = params;
    const { category_name } = body;
    return new Promise((resolve, reject) => {
        db.query("update category_table set category_name=?  where id = ?", [category_name, id], (error, elements) => {
            if (error) {
                return reject(error);
            }
            return resolve(elements);
        })
              
    })
}


module.exports = {
    getCategory,
    addCategory,
    getCategoryById

}
