
import express from "express";

import { CreateJobPost, GetJobPosts, GetSingleJobPostById } from "../controllers/jobController.js";

const jobRoute = express.Router();

jobRoute.post("/post-job", CreateJobPost);
jobRoute.get("/all-job",GetJobPosts);
jobRoute.get("/:id", GetSingleJobPostById);


export default jobRoute;