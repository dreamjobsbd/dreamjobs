
import express from "express";

import {HandleUserLogin, HandleUserRegister} from "../controllers/usercontroller.js";

const userRoute = express.Router();

userRoute.post("/register", HandleUserRegister);

userRoute.post("/login", HandleUserLogin);

export default userRoute;
