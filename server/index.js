const express = require("express");
const createError = require("http-errors");
const errorMiddleware = require("./middleware/errorMiddleware");

const app = express();

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

app.listen(5000, () => {
	console.log("🚀 @ localhost:5000");
});
