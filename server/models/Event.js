const mongoose = require("mongoose");

const EventSchema = new mongoose.Schema({
  title: String,
  description: String,
  status: String,
  date: Date,
  venue: String,
  link: String,
  speakers: [{ type: mongoose.Schema.Types.ObjectId, ref: "Speaker"}],
});

const Event = mongoose.model("Event", EventSchema);
module.exports = Event;
