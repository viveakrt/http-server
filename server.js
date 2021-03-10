const express = require("express");
const dotenv = require("dotenv");
const { v4: uuidV4 } = require("uuid");
const path = require("path");

dotenv.config();
const app = express();
const PORT = process.env.PORT;

app.get("/html", (req, res) => {
	res.status(200).sendFile(path.join(__dirname, "index.html"), (err) => {
		if (err) {
			res.sendStatus(500);
			console.error(err);
		}
		res.end();
	});
});

app.get("/json", (req, res) => {
	res.status(200).sendFile(path.join(__dirname, "data.json"), (err) => {
		if (err) {
			res.sendStatus(500);
			console.err(err);
		}
		res.end();
	});
});

app.get("/uuid", (req, res) => {
	res
		.status(200)
		.json({
			uuid: uuidV4(),
		})
		.end();
});

app.get("/status/:statusCode", (req, res) => {
	const code = Number(req.params.statusCode);
	try {
		res.sendStatus(code).end();
	} catch (err) {
		res
			.status(400)
			.json({
				message: `Invalid status code : ${req.params.statusCode} `,
			})
			.end();
	}
});

app.get("/delay/:delayInSecond", (req, res) => {
	const id = parseInt(req.params.delayInSecond);

	if (Number.isInteger(id) && id >= 0) {
		setTimeout(function () {
			res.json({
				'message':`delay ${id} seconds`
			}).end();
		}, id * 1000);
	} else {
		res
			.status(400)
			.json({
				message: "Invalid delay",
			})
			.end();
	}
});

app.listen(PORT, () => console.log(`Run on port : ${PORT}`));
