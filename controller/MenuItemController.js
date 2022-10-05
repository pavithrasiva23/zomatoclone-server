let MenuItemsModel = require("../models/MenuItemsModel");
let menuitems = require("../resources/menuitems.json");
let MenuItemController= {
    apiHome:function(request,response){
        response.status(200).send({
            status: true,
        });
    },    
    getMenuItems :async function(request,response){
    //using query [?rid=630b05b0f40656c9e5b954d7]
    let id = request.query.rid;
    id = id?id:0;
        try{
        let result= await MenuItemsModel.find({restaurantId:id});
        response.status(200).send({
            status: true,            
            menu_items: result,  // call mealtypes
            });
    }catch(error){
        response.status(500).send({
            status: false,            
            message:"server error",  
            error,
        });
    };
},
    addMenuItems:async function(request,response){
            try{            
            let result = await MenuItemsModel.insertMany(menuitems);
            response.status(200).send({
            
                status: true,        
            message:"MenuItems  added successfully",  
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

module.exports = MenuItemController;//2 exports