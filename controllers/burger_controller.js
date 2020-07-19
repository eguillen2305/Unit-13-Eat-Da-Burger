//Loads Express
var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");


router.get("/", function(req, res) {
    burger.selectAll(function(data) {
      var hbsObject = {
        burger: data
      };
      res.render("index", hbsObject);
    });
});

//burger.insertOne to post burger
router.post("/api/burger", function(req, res) {
    console.log("Data from HTML:" + req.body);
    burger.insertOne("burger_name", req.body.burger_name,  function(result) {
        // Send back the ID of the new cupcake
        console.log(result.insertId);
        res.redirect("/");
      });
});

// router put to update
router.put("/api/burger/:id", function(req, res) {
  var condition = "id = " + req.params.id;
  console.log("condition", condition);

  burger.updateOne({
    devoured: req.body.devoured
  }, condition, function(result) {
          if (result.changedRows == 0) {
        
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

//exports into server.js
module.exports = router;