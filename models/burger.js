// DEPENDENCIES
const orm = require("../config/orm");

// BURGER OBJECT
var burger = {

    // SELECT ALL BURGERS
    selectAll: function (callback) {
        orm.selectAll("burgers", function (response) {
            callback(response);
        });
    },

    // ADD A BURGER
    insertOne: function (columns, values, callback) {
        orm.insertOne("burgers", columns, values, function (response) {
            callback(response);
        });
    },

    // DEVOUR A BURGER
    updateOne: function (columnValues, condition, values, callback) {
        orm.updateOne("burgers",columnValues, condition, values, function (response) {
            callback(response);
        });
    }

};

// EXPORTS
module.exports = burger;