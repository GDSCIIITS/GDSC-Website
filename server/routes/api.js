const router = require("express").Router();
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

module.exports = router;
