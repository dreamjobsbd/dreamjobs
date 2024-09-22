
"use strict";

//packages
import express from "express";
import morgan from "morgan";

//files
import ConnectDatabase from "./config/Database.js";

//env
import { serverPort } from "./hiddenEnv.js";


//create an express application;
const app = express();


//middlewares
app.use(morgan("dev"));


//home route
app.get("/", function (req, res) {
    res.status(200).send("welcome to the server");
});

//client side error
app.use(function (req, res, next) {
    next(createHttpError(404, "route not found"))
})

//server side error -> all error store on this
app.use(function (err, req, res, next) {
    return ErrorResponse(res,{
        statusCode: err.status,
        message: err.message
    })
});


//Start the Express application listening
app.listen(serverPort, async function () {
    console.log(`server running at http://localhost:${serverPort}`);
    await ConnectDatabase()
});


export default app;