// DEPENDENCIES
const express = require("express");
const logSymbols = require('log-symbols');
const burger = require("../models/burger");

// CREATE ROUTER
const router = express.Router();

// GET 
router.get("/", function (request, response) {
    burger.selectAll(function (data) {
        const hbsObject = {
            burgers: data
        };
        console.log(`--> ${logSymbols.success} Sending: ${hbsObject}`);
        response.render("index", hbsObject);
    });
});

// POST
router.post("/api/burgers", function (request, response) {
    burger.insertOne(["burger_name"], [request.body.burger_name], function (result) {
        response.json({ id: result.insertId });
    });
});

// UPDATE
router.put("/api/burgers/:id", function (request, response) {
    const devoured = "id = " + request.params.id;

    console.log(`--> Devoured: ${devoured}`);

    burger.updateOne({ devoured: req.body.devoured }, condition, function (result) {
        if (result.changedRows == 0) {
            return response.status(404).end();
        }
        else {
            response.status(200).end();
        }
    });
});

// FAIL SAFE
router.get("*", function (request, response) {
    burger.selectAll(function (data) {
        const hbsObject = {
            burgers: data
        };
        console.log(`--> ${logSymbols.success} Sending: ${hbsObject}`);
        response.render("index", hbsObject);
    });
});

// EXPORTS
module.exports = router;