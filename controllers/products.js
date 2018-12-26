const products = [];

exports.getAddProduct = (req, res, next) =>{

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
}

exports.postAddProduct = (req, res, next) => {
    console.log(req.body);
    products.push({ title: req.body.title });
    res.redirect("/");
  };

exports.getProducts = function (req, res, next){
    
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
}