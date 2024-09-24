
import {model, Schema} from "mongoose";

const jobPostSchema = new Schema({
    
    companyName : {
        type : String,
        trim : true,
        required : true,
        minLength : [4, "copmany name is too short"],
        maxLength : [40, "copmany name is too big"]
    },

    jobTitle : {
        type : String,
        trim : true,
        required : true,
        minLength : [5 , "job title is too short"],
        maxLength : [40, "job titile is too big"]
    },

    jobDescription : {
        type : String,
        trim : true,
    },

    Responsibilities : {
        type : String,
        trim : true,
        required : true,
    },

    Skills : {
     type : String,
     trim : true,
     required : true
    },

    Education : {
        type : String,
        // trim : true,
        required : true,
    },

    Expereince : {
        type : String,
        trim : true,
        required : true,
    },
    

    Salary : {
        type : String,
        trim : true,
        required : true,
    },

    employmentStatus : {
        type : String,
        trim : true
    },
    
    applicationProcess : {
        type : String,
        trim : true,
        required : true,
    }
    
},{timestamps : true});


const JobPost = model("JobPost", jobPostSchema);

export default JobPost;