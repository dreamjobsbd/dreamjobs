
import express from "express";

import {GetAllUser, GetSingleUser, UserRegistration, HandleUserLogin, ActivateUser} from "../controllers/usercontroller.js";

const userRoute = express.Router();

userRoute.get("/all-user", GetAllUser);

userRoute.get("/:id", GetSingleUser)

userRoute.post("/registration",UserRegistration);

userRoute.post("/activate", ActivateUser);

userRoute.post("/login", HandleUserLogin);



export default userRoute;
