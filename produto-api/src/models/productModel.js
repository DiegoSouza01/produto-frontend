const db = require('../database/database');

class Product {
  static create(product, callback) {
    const { name, price, sku } = product;
    const sql = 'INSERT INTO products (name, price, sku) VALUES (?, ?, ?)';
    db.run(sql, [name, price, sku], function (err) {
      if (err) return callback(err);
      callback(null, { id: this.lastID, name, price, sku });
    });
  }

  static findAll(callback) {
    const sql = 'SELECT * FROM products ORDER BY name ASC';
    db.all(sql, [], callback);
  }

  static findById(id, callback) {
    const sql = 'SELECT * FROM products WHERE id = ?';
    db.get(sql, [id], callback);
  }

  static update(id, product, callback) {
    const { name, price, sku } = product;
    const sql = 'UPDATE products SET name = ?, price = ?, sku = ? WHERE id = ?';
    db.run(sql, [name, price, sku, id], function (err) {
      if (err) return callback(err);
      callback(null, { id, name, price, sku });
    });
  }

  static delete(id, callback) {
    const sql = 'DELETE FROM products WHERE id = ?';
    db.run(sql, [id], callback);
  }
}

module.exports = Product;