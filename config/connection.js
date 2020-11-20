// DEPENDENCIES
const mysql = require("mysql");
const logSymbols = require('log-symbols');

// CREATE CONNECTION OBJECT
const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: process.env.DB_PASS,
  database: "burgers_db"
});

// CONNECT TO DATABASE
connection.connect(function(error) {
  if (error) {
    console.error(`-> ${logSymbols.warning} Error connecting: ${error.stack}`);
    return;
  }
  console.log(`-> ${logSymbols.success} Connected as id: ${connection.threadId}`);
});

// EXPORTS
module.exports = connection;
