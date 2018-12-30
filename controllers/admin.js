const Product = require('../models/product');

exports.getAddProduct = (req, res, next) =>{

    console.log("add-product middleware form");
    console.log("url: ", req.url);
    res.render("./admin/add-product", {
      docTitle: "Add Product",
      path: "/admin/add-product",
      url: req.url,
      formsCSS: true,
      productCSS: true,
      activeAddProduct: true
    });
}

exports.postAddProduct = (req, res, next) => {
    console.log(req.body);
    const {title,imageUrl,description,price} = req.body;
    const product = new Product(title,imageUrl,description,price);
    product.save()
    // products.push({ title: req.body.title });
    res.redirect("/");
  };

exports.getProducts = (req,res,next) => {
    Product.fetchAll(products => {
        console.log(products);
        // res.sendFile(path.join(rootDir, "views", "shop.html"));
    
        res.render("./admin/products", {
          products,
          docTitle: "Admin Products",
          path: "/admin/products"
        });
      });
}