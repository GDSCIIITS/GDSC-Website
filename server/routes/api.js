const express = require('express')
const router = require("express").Router();
router.use(express.json())
const Speaker = require("../models/Speaker");
const Event = require("../models/Event");


router.get("/speakers", async (req, res) => {
  const speakers = await Speaker.find();
  res.json(speakers);
});

router.get("/events", async (req, res) => {
  const events = await Event.find();
  res.json(events);
});

router.post("/new_event", async(req, res) => {
  const event = new Event({
    title: req.body.title,
    description: req.body.description,
    status: req.body.status,
    date: req.body.date,
    venue: req.body.venue,
  });
  event.save().then(
    () => {
      res.status(201).json({
        message: 'Post saved successfully!'
      });
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
})


router.post("/new_speaker", async(req, res) => {
  console.log(req.body)
  const speaker = new Speaker({
    name: req.body.name,
  });
  speaker.save().then(
    () => {
      res.status(201).json({
        message: 'Post saved successfully!'
      });
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
})

module.exports = router;
