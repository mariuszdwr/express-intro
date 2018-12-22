const express = require("express");
const bodyParser = require("body-parser");

const rootDir = require("./util/path");

const path = require("path");

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

const app = express();

app.set("view engine", "pug"); // set template engine
app.set("views", "views"); //set folder for templates (not needed, "views" is default);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public"))); //serve static files in 'public' folder. You can have multiple middlewares for different folders

app.use("/admin", adminRoutes.router);
app.use(shopRoutes);

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(rootDir, "views", "page404.html"));
});

app.listen(3000, () => {
  console.log("Server started. Listening on port 3000");
});
