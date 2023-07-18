const db = require("../util/database");

module.exports = class Product {
  constructor(title, imageUrl, description, price) {
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }

  save() {
    return db.execute(
      "INSERT INTO products (title, price, description, imageUrl) VALUES (?, ?, ?, ?)",
      [this.title, this.price, this.description, this.imageUrl]
    );
  }

  updateProductById(id) {
    return db.execute(
      "UPDATE products SET title = ?, price = ?, description = ?, imageUrl = ? WHERE id = ?",
      [this.title, this.price, this.description, this.imageUrl, id]
    );
  }

  static deleteProductById(id) {
    return db.execute("DELETE FROM products WHERE products.id = ?", [id]);
  }

  static fetchAll() {
    return db.execute("SELECT * FROM products");
  }

  static findById(id) {
    return db.execute("SELECT * FROM products WHERE products.id = ?", [id]);
  }
};
