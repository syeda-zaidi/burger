var express = require("express");
var burgersModel = require("../models/burger.js");

var router = express.Router();

router.get("/", function(req, res) {
    burgersModel.selectAll(function(data) {
        var dataObject = {
            burgers: data
        };

        console.log(dataObject);
        res.render("index", dataObject);
    });
});

router.get("/api/burgers", function(req,res) {
    burgersModel.selectAll(function(data){
        res.json(data);
    });
});

router.post("/api/burgers", function(req, res) {
    burgersModel.insertOne([
        'burger_name'
    ], [
        req.body.burger_name
    ], function(data){
        res.redirect('/');
    });
});

// Export routes for server.js to use.
module.exports = router;
