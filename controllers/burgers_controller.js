// DEPENDENCIES
const express = require("express");
const burger = require("../models/burger");

const router = express.Router();

router.get("/", function (request, response) {
    burger.selectAll(function (data) {
        const hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        response.render("index", hbsObject);
    });
});

router.post("/api/burgers", function (request, response) {
    burger.insertOne(["burger_name"], [request.body.burger_name], function (result) {
        response.json({ id: result.insertId });
    });
});

router.put("/api/burgers/:id", function (request, response) {
    const devoured = "id = " + request.params.id;

    console.log("devoured", devoured);

    burger.updateOne({ devoured: req.body.devoured }, condition, function (result) {
        if (result.changedRows == 0) {
            return response.status(404).end();
        }
        else {
            response.status(200).end();
        }
    });
});

module.exports = router;