const fs = require("fs");
const path = require("path");
const p = path.join(__dirname, "..", "data", "products.json");
const getProductsFromFile = callback => {
  fs.readFile(p, (err, fileContent) => {
    //readFile is async function, hence callback
    if (err) {
      return callback([]);
    }
    return callback(JSON.parse(fileContent));
  });
};

module.exports = class Product {
  constructor(title) {
    this.title = title;
  }

  save() {
    // products.push(this);
    getProductsFromFile(products => {
      products.push(this);
      fs.writeFile(p, JSON.stringify(products), err => {
        if (err) console.log(err);
      });
    });
  }

  static fetchAll(callback) {
    getProductsFromFile(callback);
  }
};
