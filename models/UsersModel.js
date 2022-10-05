const mongoose = require("mongoose");
const Schema = mongoose.Schema;



const UserSchema = new Schema(
    {
      email:{type:String ,required: true},
      password:{type:String,required: true},
      firstname:{type:String},
      lastname:{type:String} , 
       
     } );

const UsersModel = mongoose.model("user",UserSchema);

module.exports = UsersModel;