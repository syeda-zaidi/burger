var express = require("express");
var burgersModel = require("../models/burger");

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
  console.log(req.body)
    burgersModel.insertOne(
      ["burger_name", "devoured"],
      [req.body.burger_name, false],
      function(result){
        res.redirect('/');
    });
});

router.put("/burgers/:id", function(req,res) {
  var condition = "id = " + req.params.id;

  console.log("condition : " + condition);

  burgersModel.updateOne(
    { 
      devoured: true
    }, 
    condition, 
    function(result){
      res.redirect("/");
  });
});


// Export routes for server.js to use.
module.exports = router;
