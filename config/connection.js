// DEPENDENCIES
const mysql = require("mysql");
const logSymbols = require('log-symbols');

// CREATE CONNECTION OBJECT
console.log("process.env.JAWSDB_URL: "+process.env.JAWSDB_URL);
let connection;

if (process.env.JAWSDB_URL){
  connection = mysql.createConnection(process.env.JAWSDB_URL);
}
else {
  connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: process.env.DB_PASS,
    database: "burgers_db"
  });
}

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
