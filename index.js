const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();

app.get("/api", (req, res) => {
	res.json({message: "Tsädäm!"});
});

app.post("/", (req, res) => {
	console.log("POST");
	res.send("Hi post");
});

app.put("/", (req, res) => {
	console.log("PUT");
	res.send("Putting things here");
});

app.delete("/", (req, res) => {
	console.log("DELETE");
	res.send("Deleting useless stuff")
});

app.listen(PORT, () => {
	console.log(`Server listening on ${PORT}`)
});
