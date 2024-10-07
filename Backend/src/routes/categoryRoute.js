"use strict";

import express from "express";

//controller function
import {
  CreateCategory,
  DeleteCategory,
  GetAllCategories,
  GetCategoryBySlug,
  updateCategory,
} from "../controllers/categoryController.js";

//validation
import RunValidation from "../validation/index.js";
import { validateCategory } from "../validation/categoryValidation.js";
import { IsAdmin, IsLoggedIn } from "../middlewares/authMiddleware.js";

const categoryRoute = express.Router();

categoryRoute.post(
  "/create-category",
  validateCategory,
  RunValidation,
  IsLoggedIn,
  IsAdmin,
  CreateCategory
);
categoryRoute.get("/all-categories", GetAllCategories);
categoryRoute.get("/:slug", GetCategoryBySlug);
categoryRoute.put(
  "/update-category/:slug",
  validateCategory,
  RunValidation,
  IsLoggedIn,
  IsAdmin,
  updateCategory
);
categoryRoute.delete("/delete-category", DeleteCategory);

export default categoryRoute;
