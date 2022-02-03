const cors = require("cors")
require("dotenv").config();

require("colors");
const express = require("express");
const mongoose = require("mongoose");
const createError = require("http-errors");
const errorMiddleware = require("./middleware/errorMiddleware");

const app = express();
app.use(cors())
app.use(express.json({ extended: false }));
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("DB Connected");
  })
  .catch(() => {
    console.log("DB Connection Failed".red);
    process.exit(1);
  });

app.get("/", (req, res) => {
  res.json({
    message: "Welcome to GDSC API"
  })
})

app.get("/ping", (req, res) => {
  res.json({
    message: "working",
  });
});

app.get("/error", (req, res, next) => {
  try {
    throw createError(401, "Please login to view this page.");
  } catch (err) {
    next(err);
  }
});

app.use(errorMiddleware);
app.use("/api", require("./routes/auth"));
app.use("/api", require("./routes/events"));
app.use("/api", require("./routes/speakers"));

app.listen(process.env.PORT, () => {
  console.log("🚀 @ http://localhost:5000");
});
