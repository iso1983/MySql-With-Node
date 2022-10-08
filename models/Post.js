const db = require("../config/db");

// A model is a class is a blueprint of an object, if you create a blog post instance, it will have all the methods in the class.These are just basics of OOP but a reminder.
class Post {
  constructor(title, body) {
    this.title = title;
    this.body = body;
  }

  save() {
    let date = new Date();
    let yyyy = date.getFullYear();
    // in JS month starts from the 0th index so add 1
    let mm = date.getMonth() + 1;
    let dd = date.getDate();
    let createdAt = `${yyyy}-${mm}-${dd}`;
    // use template literal,when adding SQL syntax ,add single column
    let sql = `
        INSERT INTO posts(title,body,createdAt)VALUES('${this.title}','${this.body}','${createdAt}')
    `;

    // from /config/db.js we exported Promise() so we can use await below if we want but you have to make the save function async then or just use await from where ever you call this save function
    return db.execute(sql);
  }

  // Remember static methods are accessible without an instance
  static findAll() {
    let sql = "SELECT * FROM posts;";
    return db.execute(sql);
  }

  static findById(id) {
    let sql = `SELECT * FROM posts WHERE id=${id};`;
    return db.execute(sql);
  }
}

module.exports = Post;
