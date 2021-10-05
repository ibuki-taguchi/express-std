"use strict";
const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.send("Some photos");
});

router.get("/:test", (req, res, next) => {
  res.send(req.params.test);
});

module.exports = router;
