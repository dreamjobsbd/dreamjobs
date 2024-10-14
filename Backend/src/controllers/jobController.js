
"use strict";

import { ErrorResponse, SuccessResponse } from "../helpers/apiResponse.js";
import JobPost from "../models/jobModel.js";
import Category from "../models/categoryModel.js"


export const CreateJobPost = async (req, res, next) => {
  try {
    const {
      companyName,
      jobTitle,
      category,
      jobDescription,
      education,
      skills,
      responsibilities,
      experience,
      salary,
      employmentStatus,
      locationType,
      jobLocation,
      gender,
      age,
      applicationProcess,
    } = req.body;

    //find the category by name , if invalid send error response
    const categoryDoc = await Category.findOne({ name: category });
    if (!categoryDoc) {
      return ErrorResponse(res,{
        statusCode : 400,
        message : "category name is invalid"
      })
    }

    const newJobPost = new JobPost({
      companyName,
      jobTitle,
      category :categoryDoc._id,
      jobDescription,
      education,
      skills,
      responsibilities,
      experience,
      salary,
      employmentStatus,
      locationType,
      jobLocation,
      gender,
      age,
      applicationProcess,
    });

    await newJobPost.save();

   return SuccessResponse(res,{
      statusCode : 200,
      message : `${jobTitle} post successfully`,
    })
    
  } catch (error) {
    next(error)
  }
};


export const GetSingleJobPostById = async (req, res, next) =>  {
  try {
     const {id} = req.params;

     const singleJobPost = await JobPost.findById({_id : id});
      
     return SuccessResponse(res, {
      statusCode : 200,
      message : "return job post",
      payload : {singleJobPost}
     })
     
  } catch (error) {
    next(error)
  }
}


export const GetJobPosts = async (req, res, next) => {
  try {
      const jobPosts = await JobPost.find({});

      return SuccessResponse(res,{
        statusCode : 200,
        message : "return all the jobs",
        payload : { jobPosts }
      })
  } catch (error) {
     next(error)
  }
}