const express = require("express");
const path = require("path");

const rootDir = require("../util/path");
const adminData = require("./admin");

const router = express.Router({ mergeParams: true });

router.get("/", (req, res, next) => {
  const products = adminData.products;
  console.log(products);
  // res.sendFile(path.join(rootDir, "views", "shop.html"));

  res.render("shop", {
    products,
    docTitle: "Shop",
    path: "/",
    hasProducts: products.length > 0,
    activeShop: true,
    productCSS: true
  });
});

module.exports = router;
