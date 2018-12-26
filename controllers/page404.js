exports.get404 = function(req, res, next) {
    // res.status(404).sendFile(path.join(rootDir, "views", "page404.html"));
    console.log("Error 404: page not found", req.url);
  
    res
      .status(404)
      .render("page404", { url: req.url, docTitle: "Error 404", path: req.url });
  }
