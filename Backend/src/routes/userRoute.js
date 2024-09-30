
import express from "express";

import {GetAllUser, GetSingleUser} from "../controllers/usercontroller.js";

const userRoute = express.Router();

userRoute.get("/all-user", GetAllUser);

userRoute.get("/:id", GetSingleUser)



export default userRoute;
