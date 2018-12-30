const Product = require("../models/product");

exports.getProducts = function(req, res, next) {
  Product.fetchAll(products => {
    console.log(products);
    // res.sendFile(path.join(rootDir, "views", "shop.html"));

    res.render("./shop/product-list", {
      products,
      docTitle: "All Products",
      path: "/products"
    });
  });
};

exports.getIndex = (req, res, next) => {
  Product.fetchAll(products => {
    console.log(products);
    // res.sendFile(path.join(rootDir, "views", "shop.html"));

    res.render("./shop/index", {
      products,
      docTitle: "Shop",
      path: "/"
    });
  });
};

exports.getCart = (req, res, next) => {
    
    
        res.render("./shop/cart", {
          
          docTitle: "Your Cart",
          path: "/cart"
        });
};

exports.getCheckout = (req,res,next) => {

    res.render('shop/checkout',{
        path: '/checkout',
        docTitle: 'Checkout'
    })
}
exports.getOrders = (req,res,next) => {

    res.render('shop/orders',{
        path: '/orders',
        docTitle: 'Orders'
    })
}

