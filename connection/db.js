const sql= require("mysql");
const conn = sql.createConnection({
    host:"localhost",
    user: "root", 
    password: "",
    database: "ecommerce",

});

conn.connect((error) => {
    if(error){
        console.log(error);
        return;
    }
    console.log("databased connected");
});

module.exports= conn;