import { model, Schema } from "mongoose";

const jobPostSchema = new Schema(
  {
    companyName: {
      type: String,
      trim: true,
      required: true,
    },

    jobTitle: {
      type: String,
      trim: true,
      required: true,
    },

    salary: {
      type: String,
      trim: true,
      required: true,
    },

    category : {
      type : Schema.Types.ObjectId,
      ref : "Category",
      required: true,
    },

    applicationProcess: {
      type: String,
      trim: true,
      required: true,
    },

    jobDescription: {
      type: String,
      trim: true,
    },

    education: {
      type: String,
      trim: true,
    },

    skills: {
      type: String,
      trim: true,
    },

    responsibilities: {
      type: String,
      trim: true,
    },

    experience: {
      type: String,
      trim: true,
    },

    benefits : {
      type : String,
      trim : true,  
    },

    employmentStatus: {
      type: String,
      trim: true,
    },

    locationType: {
     type : String,
     trim : true,     
    },

    jobLocation: {
      type : String,
      trim : true,
    },

    gender : {
      type : String,
      trim : true,
    },

    age : {
      type : String,
      trim : true,
    },

    vacancy : {
      type : String,
      trim : true,
    },

    source : {
      type : String,
      trim : true,
    },

    deadline : {
      type : String,
      trim : true,
    },

    optionalInfo : {
      type : String,
      trim : true,
    }

  },
  { timestamps: true }
);

const JobPost = model("JobPost", jobPostSchema);

export default JobPost;
