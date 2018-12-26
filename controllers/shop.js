(req, res, next) => {
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