const UsersModel = require("../models/UsersModel");
const bcrypt = require("bcrypt");
/*
d=12a
e=22b
p=87p
k=97t

let password = "deepak";
let salt = 10;//213fkjfjk/
let finalhashPassword = "12a22b22b87p97t213fkjfjk"; //hash+salt//
*/
const UsersController = {
usersSignUp: async function(request,response){
    let data = request.body;
    let password = data.password;
    let saltRound=10;
    //insert user
    try{
     let salt = await bcrypt.genSalt(saltRound);
    let hashPassword = await bcrypt.hash(password,saltRound);
    const newUser = new UsersModel({
      email: data.email,//compulsory
      password:hashPassword,//compulsory
      firstname:data.firstname ? data.firstname:undefined,//not mandatory
      lastname:data.lastname ? data.lastname:undefined , //not mandatory
           });

let result = await UsersModel.findOne({email:data.email});
//check already exists email
if(result){
    response.status(200).send({
        status:false,
        message :"Email id is already exists,use another email id",
    });

}     
           else{
            let saveResult = await newUser. save()
           response.status(200).send({
            status:true, 
            result:saveResult,
        });
    }    
}catch(error){
    response.status(500).send({
        status: false,        
         message:"server error",  
         error,
     });

}
},


userLogin: async function (request, response) {
    let data = request.body;
    try {
      let result = await UsersModel.findOne({
        email: data.email,
      });
      if (result) {
        let isPasswordMatch = await bcrypt.compare(data.password,result.password);
        if (isPasswordMatch) {
          let { _id, email, firstname, lastname } = result;
          response.status(200).send({
            status: true,
            result: {
              _id,
              email,
              firstname,
              lastname,
            },
            message: "Login successfully !!!",
          });
        } else {
          response.status(200).send({
            status: false,
            message: "Password is wrong.",
          });
        }
      } else {
        response.status(200).send({
          status: false,
          message: "Username is wrong.",
        });
      }
    } catch (error) {
      response.status(500).send({
        status: false,
        message: "server error",
        error,
      });
    }
  },
};

module.exports = UsersController;