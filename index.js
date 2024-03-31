require("dotenv").config();
const express = require("express");
const routes = require("./routes");
const { connected } = require("./DB"); 

const app = express();

app.use(express.json());

app.get("/", (req, res) => res.send("Hello ILham!"));

routes.forEach((route) => {
	app.use("/api", route);
});

app.listen(process.env.PORT, async () => {
	try {
		await connected;
		console.log("server is connected with DB");
	} catch (error) {
		console.log(error.message);
	}
	console.log(`Server is running at http://localhost:${process.env.PORT}`);
});
