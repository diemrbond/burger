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
    
    updateOne: function (table, column, condition, values, callback) {

        let queryString = `UPDATE ?? SET ??=? WHERE id=?`;
        console.log("table: "+table)
        console.log("column: "+column)
        console.log("values: "+values)
        console.log("callback: "+callback)
        connection.query(queryString, [table,column,condition,values], function (error, result) {
            if (error) throw error;
            callback(result);
        });
    }

}

// EXPORTS
module.exports = orm;