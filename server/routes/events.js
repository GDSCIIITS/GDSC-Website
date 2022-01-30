const express = require("express");
const router = require("express").Router();
router.use(express.json());
const Event = require("../models/Event");

router.route("/events").get(async (req, res) => {
  const events = await Event.find();
  res.json(events);
});

router.route("/events").post(async (req, res) => {
  const speakers = []
  req.body.speakers.forEach((item, index) => {
    speakers.push(item.value)
  })
  const event = new Event({
    title: req.body.title,
    description: req.body.description,
    status: req.body.status,
    date: req.body.date,
    venue: req.body.venue,
    speakers: speakers
  });
  event
    .save()
    .then(() => {
      res.status(201).json({
        message: "Event saved successfully!",
      });
    })
    .catch((error) => {
      res.status(400).json({
        error: error,
      });
    });
});

module.exports = router;