
"use strict";

import { ErrorResponse, SuccessResponse } from "../helpers/apiResponse.js";
import JobPost from "../models/jobModel.js";
import Category from "../models/categoryModel.js"


export const CreateJobPost = async (req, res, next) => {
  try {
    const {
      companyName,
      jobTitle,
      salary,
      category,
      applicationProcess,
      jobDescription,
      education,
      skills,
      responsibilities,
      experience,
      benefits,
      employmentStatus,
      locationType,
      jobLocation,
      gender,
      age,
      vacancy,
      source,
      deadline,
      optionalInfo
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
      salary,
      category : categoryDoc._id,
      applicationProcess,
      jobDescription,
      education,
      skills,
      responsibilities,
      experience,
      benefits,
      employmentStatus,
      locationType,
      jobLocation,
      gender,
      age,
      vacancy,
      source,
      deadline,
      optionalInfo
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


export const GetJobPostsByCategory = async (req, res, next) => {
  try {
    const { slug } = req.params; 
    
    // Find the category by slug
    const category = await Category.findOne({ slug });
    
    if (!category) {
      return res.status(404).json({
        success: false,
        message: "Category not found",
      });
    }    

    // Find job posts for this category
    const jobsByCategory = await JobPost.find({ category: category._id })

    return SuccessResponse(res, {
      statusCode : 200,
      message : "jobs by cateories",
      payload : { jobsByCategory }
    })

  } catch (error) {
    next(error);
  }
};


export const GetJobByDeadline = async (req, res, next) => {
  try {
     const {deadline} = req.params;

     const jobs = await JobPost.find({deadline});

     return SuccessResponse(res, {
      statusCode : 200,
      message : `${deadline} jobs`,
      payload : {jobs}
     })
  } catch (error) {
    next(error)
  }
}

export const GetJobsByCreatedDate = async (req, res, next) => {
  try {
    const date = req.params.date; // Format: YYYY-MM-DD
    
    // Create start and end of the day
    const startDate = new Date(date);
    const endDate = new Date(date);
    endDate.setDate(endDate.getDate() + 1);

    const jobs = await JobPost.find({
      createdAt: {
        $gte: startDate,
        $lt: endDate
      }
    });

    return SuccessResponse(res, {
      statusCode: 200,
      message: `Jobs post on ${date}`,
      payload: { jobs }
    });
  } catch (error) {
    next(error);
  }
};

export const deleteJobByID = async (req, res, next) => {
  try {
     const {id} = req.params;
     
     const deleteJob = await JobPost.findByIdAndDelete({_id : id});

     if(!deleteJob) return ErrorResponse('no job found with this id');

     return SuccessResponse (res, {
      statusCode : 200,
      message : "delete job successfully",
     })
  } catch (error) {
    next(error)
  }
}








