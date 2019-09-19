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



// Export routes for server.js to use.
module.exports = router;
