
import express from "express";

import {GetAllUser, GetSingleUser, HandleUserLogin, HandleUserRegister} from "../controllers/usercontroller.js";

const userRoute = express.Router();

userRoute.get("/all-user", GetAllUser);

userRoute.get("/:id", GetSingleUser)

userRoute.post("/register", HandleUserRegister);

userRoute.post("/login", HandleUserLogin);

export default userRoute;
