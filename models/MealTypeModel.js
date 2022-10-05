// import mongoose schema
const mongoose = require("mongoose");
const Schema = mongoose.Schema; // call schema

// create schema
const mealTypeSchema = new Schema({  // object
    name:{type:String},
    content:{type:String},
    image:{type:String},
    meal_type:{type:Number},
});



//create model
const MealTypeModel = mongoose.model("mealType",mealTypeSchema);


// export model
module.exports = MealTypeModel;