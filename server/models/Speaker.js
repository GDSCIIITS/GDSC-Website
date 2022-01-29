const mongoose = require("mongoose");

const SpeakerSchema = new mongoose.Schema({
  name: String,
  photo: String,
  domain: String,
  rank: String
});
const Speaker = mongoose.model("Speaker", SpeakerSchema);

module.exports = Speaker;
