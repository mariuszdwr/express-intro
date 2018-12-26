const express = require("express");
const bodyParser = require("body-parser");
// const expressHbs = require("express-handlebars");

const rootDir = require("./util/path");

const path = require("path");

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const errorPage = require('./controllers/page404');

const app = express();

// app.engine(
//   "handlebars",
//   expressHbs({ layoutsDir: "views/layouts/", defaultLayout: "main-layout" })
// );

// app.set("view engine", "pug"); // set template engine
// app.set("view engine", "handlebars");
app.set("view engine", "ejs");
app.set("views", "views"); //set folder for templates (not needed, "views" is default);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public"))); //serve static files in 'public' folder. You can have multiple middlewares for different folders

app.use("/admin", adminRoutes);
app.use(shopRoutes);

app.use(errorPage.get404);

app.listen(3000, () => {
  console.log("Server started. Listening on port 3000");
});
