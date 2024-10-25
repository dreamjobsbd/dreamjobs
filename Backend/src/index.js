
"use strict";

//packages
import express from "express";
import morgan from "morgan";
import cors from "cors";
import httpError from "http-errors"
import cookie from "cookie-parser";

//files
import ConnectDatabase from "./config/Database.js";

//routes
import userRoute from "./routes/userRoute.js";
import authRoute from "./routes/authRoute.js";
import jobRoute from "./routes/jobRoute.js";
import categoryRoute from "./routes/categoryRoute.js";

//env
import { serverPort } from "./hiddenEnv.js";
import bodyParser from "body-parser";

import { ErrorResponse } from "./helpers/apiResponse.js";

//create an express application;
const app = express();
app.use(cors({
    origin: ["http://localhost:5173","https://flexywork.vercel.app"],
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

//middlewares
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));
app.use(cookie());

//routes
app.use("/user",userRoute);
app.use("/auth",authRoute);
app.use("/job",jobRoute);
app.use("/category",categoryRoute)

//home route
app.get("/", function (req, res) {
    res.status(200).send("welcome to the server");
});

//client side error
app.use(function (req, res, next) {
    next(httpError(404, "route not found"))
})

//server side error -> all error store on this
app.use(function (err, req, res, next) {
    return ErrorResponse(res,{
        statusCode: err.status,
        message: err.message
    })
});


// Start the Express application listening
const startServer = async () => {
    try {
      // Connect to database first
      await ConnectDatabase();
      
      // Only start listening once database is connected
      app.listen(serverPort, () => {
        console.log(`Server running at http://localhost:${serverPort}`);
      });
    } catch (error) {
      console.error('Failed to start server:', error);
      process.exit(1);
    }
};

startServer();


export default app;