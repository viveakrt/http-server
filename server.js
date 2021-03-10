const express = require("express");
const { v1 : uuid }=require("uuid");

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/html", (req, res) => {
	res.set("Content-Type", "text/html");
	res.send(`<!DOCTYPE html>
                <html>
                <head>
                </head>
                <body>
                    <h1>Any fool can write code that a computer can understand. Good programmers write code that humans can understand.</h1>
                    <p> - Martin Fowler</p>
                </body>
                </html>`);
	res.end();
});

app.get("/json", (req, res) => {
	res.json({
		slideshow: {
			author: "Yours Truly",
			date: "date of publication",
			slides: [
				{
					title: "Wake up to WonderWidgets!",
					type: "all",
				},
				{
					items: [
						"Why <em>WonderWidgets</em> are great",
						"Who <em>buys</em> WonderWidgets",
					],
					title: "Overview",
					type: "all",
				},
			],
			title: "Sample Slide Show",
		},
	});
    res.end();
});

app.get("/uuid", (req, res) => {
    res.json({
        uuid :uuid()
    });
    res.end();
});

app.get("/status/:code",(req,res)=>{
    let code = req.params.code;
    res.status(code);
    res.end();
});


app.listen(PORT, () => console.log(`Run on port : ${PORT}`));
