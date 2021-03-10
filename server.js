const express = require("express");

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
        "slideshow": {
            "author": "Yours Truly",
            "date": "date of publication",
            "slides": [
                {
                "title": "Wake up to WonderWidgets!",
                "type": "all"
                },
                {
                "items": [
                    "Why <em>WonderWidgets</em> are great",
                    "Who <em>buys</em> WonderWidgets"
                ],
                "title": "Overview",
                "type": "all"
                }
            ],
            "title": "Sample Slide Show"
            }
        });
    
});


app.listen(PORT, () => console.log(`Run on port : ${PORT}`));
