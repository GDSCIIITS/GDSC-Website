const express = require("express");
const router = require("express").Router();
router.use(express.json());
const Event = require("../models/Event");
const authMiddleware = require("../middleware/auth")

router.route("/events").get(async (req, res) => {
  const events = await Event.find();
  res.json(events);
});

router.route("/events").post(authMiddleware, async (req, res) => {
  const speakers = []
  req.body.speakers.forEach((item, index) => {
    speakers.push(item.value)
  })
  const data = {
    title: req.body.title,
    description: req.body.description,
    status: req.body.status,
    date: req.body.date,
    venue: req.body.venue,
    link: req.body.link,
    speakers: speakers
  }
  const event = new Event(data);
  event
    .save()
    .then((response) => {
      res.status(201).json({
        message: "Event saved successfully!",
        payload: response
      });
    })
    .catch((error) => {
      res.status(400).json({
        error: error,
      });
    });
});

router.route("/events").put(authMiddleware, async (req, res) => {
  try {
    const speakers = []
    req.body.speakers.forEach((item, index) => {
      speakers.push(item.value)
    })
    const data = {
      title: req.body.title,
      description: req.body.description,
      status: req.body.status,
      date: req.body.date,
      venue: req.body.venue,
      link: req.body.link,
      speakers: speakers
    }
    const response = await Event.updateOne(
      { _id: req.body._id },
      {
        $set: data,
      }
    );
    res
      .status(201)
      .json({ message: "Event updated successfully", payload: response, body: {...data, _id: req.body._id} });
  } catch (error) {
    res.status(400).json({
      error: error,
    });
  }
});

router.route("/events").delete(authMiddleware, async (req, res) => {
  try {
    const response = await Event.deleteOne({ _id: req.body.id });
    res
      .status(201)
      .json({ message: "Event deleted successfully", payload: response });
  } catch (error) {
    res.status(400).json({
      error: error,
    });
  }
});

module.exports = router;