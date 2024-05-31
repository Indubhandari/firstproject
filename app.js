const express = require("express");
const exphbs = require("express-handlebars");
const app = express();
const port = 8000;

const routes = require('./routes/index');
const categoryRoutes = require('./routes/category');
const helpers = require("./helper/helper");

const hbs = exphbs.create({
    extname: ".hbs",
    defaultLayout: "main.hbs",
    layoutsDir: "views/layouts/",
    helpers: helpers
});

app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');

// Middleware for parsing URL-encoded and JSON bodies
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serving static files
app.use("/static", express.static(__dirname + "/public"));

// Routes
app.use("/", routes);

app.use("/category", categoryRoutes);
app.use("/product", ProductRoutes);



app.listen(port, (error) => {
    if (error) {
        return console.log(error);
    } else {
        console.log("listening");
        console.log(`http://localhost:${port}`);
    }
});
