let mealTypeModel = require("../models/MealTypeModel");
let mealType = require("../resources/mealtype.json");

let MealtypeController = {
    apiHome:function(request,response){
        response.status(200).send({
            status: true,
        });
    },    
    getMealTypes :async function(request,response){
        try{
        let result= await mealTypeModel.find()
        response.status(200).send({
            status: true,            
            meal_type: result,  // call mealtypes
        });
    }catch(error){
        response.status(500).send({
            status: false,            
            message:"server error",  
            error,
        });
    };
},
    addMealType:async function(request,response){
        try{
            
            let result = await mealTypeModel.insertMany(mealType);
            response.status(200).send({
                status: true,        
            message:"meal type added successfully",  
            result,
        });
    }catch(error){
        response.status(500).send({
           status: false,        
            message:"server error",  
            error,
        });

    };
},
};    // 1

module.exports = MealtypeController;//2 exports