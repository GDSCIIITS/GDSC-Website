// const mongoose = require("mongoose");
// const Speaker = require("./models/Speaker");
// const Event = require("./models/Event");
// require("dotenv").config();

// function seedSpeakers() {
//   Speaker.insertMany([
//     { name: "Abhinay Bathina" },
//     { name: "Rishi" },
//     { name: "Surya" },
//   ]).then(() => {
//     console.log("speakers created");
//   });
// }

// async function seedEvents() {
//   const SpeakerRishi = await Speaker.findOne({ name: "Rishi" });
//   const SpeakerSurya = await Speaker.findOne({ name: "Surya" });
//   const SpeakerAbhinayBathina = await Speaker.findOne({
//     name: "Abhinay Bathina",
//   });

//   Event.insertMany([
//     {
//       title: "Android 1",
//       description: "Android 1 session",
//       status: "Not started",
//       date: new Date("18 December, 2021"),
//       venue: "GDSC IIITS",
//       speakers: [SpeakerRishi._id],
//     },
//     {
//       title: "Android 2",
//       description: "Android 2 session",
//       status: "Going on",
//       date: new Date("24 December, 2021"),
//       venue: "GDSC IIITS",
//       speakers: [SpeakerSurya._id, SpeakerAbhinayBathina._id],
//     },
//   ]).then(() => {
//     console.log("here");
//   });
// }

// mongoose
//   .connect(process.env.MONGO_URI)
//   .then(() => {
//     // seedSpeakers();
//     seedEvents();
//   })
//   .catch(() => {
//     process.exit(1);
//   });
