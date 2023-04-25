const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "varma",
  password: "surya",
  database: "projectsupportsystem",
});

module.exports = connection;
