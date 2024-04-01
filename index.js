require("dotenv").config();
const express = require("express");
const routes = require("./routes");
const { connected } = require("./DB");
const errorHandler = require("./middlewares/errorHandler");

const app = express();

app.use(express.json());

app.use(errorHandler);

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
