"use strict";

//packages
import slugify from "slugify";

//model
import Category from "../models/categoryModel.js";
import { SuccessResponse } from "../helpers/apiResponse.js";

export const CreateCategory = async (req, res, next) => {
  try {
    const { name } = req.body;

    const newCategory = await Category.create({
      name: name,
      slug: slugify(name,{strict : true,}),
    });

    return SuccessResponse(res, {
      statusCode: 200,
      message: "category create successfully",
      payload: { newCategory },
    });
  } catch (error) {
    next(error);
  }
};

export const GetAllCategories = async (req, res, next) => {
  try {
    const allCategories = await Category.find({});

    return SuccessResponse(res, {
      statusCode: 200,
      message: "all categories returned",
      payload: { allCategories },
    });
  } catch (error) {
    next(error);
  }
};

export const GetCategoryBySlug = async (req, res, next) => {
  try {
    const { slug } = req.params;

    const findCategory = await Category.findOne({ slug });

    return SuccessResponse(res, {
      statusCode: 200,
      message: "category return successfully",
      payload: { findCategory },
    });
  } catch (error) {
    next(error);
  }
};

export const updateCategory = async (req, res, next) => {
    try {
        const { slug } = req.params;
        const { name } = req.body;

        //define filters
        const filter = { slug };
        const updates = { $set: { name: name, slug: slugify(name) } };
        const options = { new: true };

        //find and update the category in the database
        const updateCategory = await Category.findOneAndUpdate(filter, updates, options);

        //if category not found, throw a 404 error
        if (!updateCategory) throw HttpError(404, "category not found")

        //return success response with the updated category
        return SuccessResponse(res, {
            statusCode: 200,
            message: "updat category successfully",
            payload: updateCategory
        })
    } catch (error) {
        next(error)
    }
}

export const DeleteCategory = async (req, res, next) => {
  try {
    const { id } = req.body;
    const deleteCategory = await Category.deleteOne({ _id: id });

    return SuccessResponse(res, {
      statusCode: 200,
      message: "category delete successfull",
      payload: { deleteCategory },
    });
  } catch (error) {
    next(error);
  }
};
