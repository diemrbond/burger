// DEPENDENCIES
const orm = require("../config/orm");

// BURGER OBJECT
var burger = {

    selectAll: function (callback) {
        orm.selectAll("burgers", function (response) {
            callback(response);
        });
    },

    insertOne: function (columns, values, callback) {
        orm.insertOne("burgers", columns, values, function (response) {
            callback(response);
        });
    },

    updateOne: function (columnValues, condition, values, callback) {
        orm.updateOne("burgers",columnValues, condition, values, function (response) {
            callback(response);
        });
    }

};

// EXPORTS
module.exports = burger;