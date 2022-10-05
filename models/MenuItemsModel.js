// import mongoose schema
const mongoose = require("mongoose");
const Schema = mongoose.Schema; // call schema
const ObjectID = Schema.Types.ObjectId;
// create schema
const MenuItemsSchema = new Schema({  // object
    name:{type:String},
    description:{type:String} ,
    ingridients: {type:Array},
    restaurantId: {type:ObjectID},
    image:{type:String} ,
    qty: {type:Number},
    price: {type:Number},
});



//create model
const MenuItemsModel = mongoose.model("menuitems",MenuItemsSchema );


// export model
module.exports = MenuItemsModel;