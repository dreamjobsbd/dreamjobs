
"use strict";

import { SuccessResponse } from "../helpers/apiResponse.js";
import JobPost from "../models/jobModel.js";


export const CreateJobPost = async (req, res, next) => {
  try {
    const {
      companyName,
      jobTitle,
      jobDescription,
      Responsibilities,
      Skills,
      Education,
      Expereince,
      Salary,
      employmentStatus,
      applicationProcess,
    } = req.body;

    const newJobPost = new JobPost({
      companyName,
      jobTitle,
      jobDescription,
      Responsibilities,
      Skills,
      Education,
      Expereince,
      Salary,
      employmentStatus,
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