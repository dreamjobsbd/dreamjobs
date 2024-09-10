
"use strict";

//packages
import mongoose from "mongoose";

//env
import { MongodbUrl } from "../hiddenEnv.js";

//Function to Connect to the mongoDB Database
const ConnectDatabase = async function (options={}) {
    try {
     // Connect via provided URL and options receive for connection customization
     await mongoose.connect(MongodbUrl,options);
     console.log("connected To Database successfully");
 
     //event listener for database connection error
     mongoose.connection.on("error", function (error) {
         console.error(`error in database connection:` + error);
      });
    } catch (error) {
       console.error("could not connect to database");
    }
 };
 
 export default ConnectDatabase