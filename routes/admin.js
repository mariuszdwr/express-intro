const express = require("express");
const path = require("path");

const rootDir = require("../util/path");

const router = express.Router({ mergeParams: true });

const products = [];

router.get("/add-product", (req, res, next) => {
  console.log("add-product middleware form");
  console.log("url: ", req.url);
  res.render("add-product", {
    docTitle: "Add Product",
    path: "/admin/add-product",
    url: req.url,
    formsCSS: true,
    productCSS: true,
    activeAddProduct: true
  });
});

router.post("/add-product", (req, res, next) => {
  console.log(req.body);
  products.push({ title: req.body.title });
  res.redirect("/");
});

module.exports = { router, products };
