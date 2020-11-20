// DEPENDENCIES
const orm = require("../config/orm");

var burger = {

    selectAll: function () {
        orm.selectAll("burgers", function (response) {
            callback(response);
        });
    },

    insertOne: function (columns, values, callback) {
        orm.insertOne("burgers", columns, values, function (response) {
            callback(response);
        });
    },

    updateOne: function (columnValues, condition, callback) {
        orm.updateOne("burgers", columnValues, condition, function (response) {
            callback(response);
        });
    }

};

module.exports = burger;