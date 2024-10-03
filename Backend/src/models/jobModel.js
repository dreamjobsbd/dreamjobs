
import {model, Schema} from "mongoose";

const jobPostSchema = new Schema({
    
    companyName : {
        type : String,
    },

    jobTitle : {
        type : String,
    },

    jobDescription : {
        type : String,
    },

    Responsibilities : {
        type : String,
    },

    Skills : {
     type : String,
    },

    Education : {
        type : String,
    },

    Expereince : {
        type : String,
    },
    
    Salary : {
        type : String,
    },

    employmentStatus : {
        type : String,
    },
    
    applicationProcess : {
        type : String,
    }
    
},{timestamps : true});


const JobPost = model("JobPost", jobPostSchema);

export default JobPost;