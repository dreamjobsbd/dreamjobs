
import { Schema, model } from "mongoose";

const categorySchema = new Schema({
    name : {
        type : String,
        required : [true, "category is requireds"],
        unique : true,
        trim : true,
    },
    slug : {
        type : String,
        required : [true, "category slug is required"],
        lowercase : true,
    }
},{timestamps : true});

const Category = model("Categorie", categorySchema);

export default Category;