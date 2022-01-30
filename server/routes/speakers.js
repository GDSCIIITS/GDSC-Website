const express = require("express");
const router = require("express").Router();
router.use(express.json());
const Speaker = require("../models/Speaker");

router.route("/speakers").get(async (req, res) => {
  const speakers = await Speaker.find();
  res.json(speakers);
});

router.route("/speakers").post(async (req, res) => {
  console.log(req.body);
  const speaker = new Speaker({
    name: req.body.name,
    photo: req.body.photo,
    domain: req.body.domain,
    rank: req.body.rank,
  });
  speaker
    .save()
    .then(() => {
      res.status(201).json({
        message: "Speaker saved successfully!",
      });
    })
    .catch((error) => {
      res.status(400).json({
        error: error,
      });
    });
});

module.exports = router;
