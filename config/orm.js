// DEPENDENCIES
const connection = require("./connection");

const orm = {

    selectAll: function (tableInput, callback) {

        let queryString = `SELECT * FROM ${tableInput}`;

        connection.query(queryString, function (error, result) {
            if (error) throw error;
            callback(result);
        });
    },

    insertOne: function (table, column, values, callback) {

        let queryString = `INSERT INTO ?? (??) VALUES (?)`;
        
        connection.query(queryString, [table,column,values], function (error, result) {
            if (error) throw error;
            callback(result);
        });
    },
    
    updateOne: function () {

    }

}

// EXPORTS
module.exports = orm;