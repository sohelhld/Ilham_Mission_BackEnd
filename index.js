const express = require("express");
const { connected } = require("./DB");
const routes = require("./routes");
require("dotenv").config();
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

    console.log(`Example app listening on port ${process.env.PORT}!`);
});
