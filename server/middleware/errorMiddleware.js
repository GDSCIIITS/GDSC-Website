module.exports = (err, req, res, next) => {
	res.sendStatus(err.status).json({
		message: err.message,
	});
};
