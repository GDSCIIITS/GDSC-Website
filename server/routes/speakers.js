const express = require("express");
const router = require("express").Router();
router.use(express.json());
const Speaker = require("../models/Speaker");
const authMiddleware = require("../middleware/auth")

router.route("/speakers").get(async (req, res) => {
  const speakers = await Speaker.find();
  res.json(speakers);
});

router.route("/speakers").post(authMiddleware, async (req, res) => {
  const speaker = new Speaker({
    name: req.body.name,
    photo: req.body.photo,
    domain: req.body.domain,
    rank: req.body.rank,
  });
  speaker
    .save()
    .then((response) => {
      res.status(201).json({
        message: "Speaker saved successfully!",
        payload: response
      });
    })
    .catch((error) => {
      res.status(400).json({
        error: error,
      });
    });
});

router.route("/speakers").put(authMiddleware, async (req, res) => {
  try {
    const response = await Speaker.updateOne(
      { _id: req.body._id },
      {
        $set: {
          name: req.body.name,
          domain: req.body.domain,
          rank: req.body.rank,
          photo: req.body.photo,
        },
      }
    );
    res
      .status(201)
      .json({ message: "Speaker updated successfully", payload: response });
  } catch (error) {
    res.status(400).json({
      error: error,
    });
  }
});

router.route("/speakers").delete(authMiddleware, async (req, res) => {
  try {
    const response = await Speaker.deleteOne({ _id: req.body.id });
    res
      .status(201)
      .json({ message: "Speaker deleted successfully", payload: response });
  } catch (error) {
    res.status(400).json({
      error: error,
    });
  }
});

module.exports = router;
