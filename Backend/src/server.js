
"use strict";

//packages
import express from "express";
import morgan from "morgan";

import { serverPort } from "./hiddenEnv.js";


//create an express application;
const app = express();


//middlewares
app.use(morgan("dev"));


//home route
app.get("/", function (req, res) {
    res.status(200).send("welcome to the server");
});


// Start the Express application listening
app.listen(serverPort, async function () {
    console.log(`server running at http://localhost:${serverPort}`);
});


export default app;