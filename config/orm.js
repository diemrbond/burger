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

    insertOne: function () {

    },
    
    updateOne: function () {

    }

}

// EXPORTS
module.exports = orm;