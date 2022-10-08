const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "..", ".env") });
console.log(path.join(__dirname, "..", ".env"));
// // Set up the connection to mysql DB
const mysql = require("mysql2");

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
});

// // I leave the code here so you can see how sql query works in node
// let sql = "SELECT * FROM posts;";
// pool.execute(sql, (err, res) => {
//   if (err) throw err;
//   res.forEach((row) => {
//     console.log(row.id);
//     console.log(row.title);
//   });
// });

module.exports = pool.promise();
