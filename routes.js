const express = require("express");
const todos = require("./todos");

const router = express.Router();

router.get("/todos", (req, res) => {
  res.json(todos);
});

router.get("/", (req, res) => {
  res.send("Assignment for deploying on Azure using nginx");
});

module.exports = router;
