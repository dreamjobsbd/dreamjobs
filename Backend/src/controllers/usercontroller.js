"use strict";

//model
import User from "../models/userModel.js";

//helper
import {SuccessResponse} from "../helpers/apiResponse.js";


export const GetAllUser = async (req, res, next) => {
    try {
        const allUser = await User.find({});

        return SuccessResponse(res, {
            statusCode : 200,
            message : "return all the user",
            payload : {
                allUser
            }
        })
    } catch (error) {
        next(error);
    }
}


export const GetSingleUser = async (req, res, next) => {
    try {
       const { id } = req.params;
       const singleUserById = await User.findById({_id : id});

       return SuccessResponse(res, {
        statusCode : 200,
        message : "retuen a user",
        payload : { singleUserById }
       })
    } catch (error) {
        next(error)
    }
}




