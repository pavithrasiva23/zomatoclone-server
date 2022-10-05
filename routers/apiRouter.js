const express = require("express");
const router = express.Router();
const meal_type = require("../controller/MealtypeController");
const location = require("../controller/LocationController");
const restaurant =require("../controller/RestaurantController");
const users =require("../controller/UsersController");
const menu_items = require("../controller/MenuItemController");
const paymentController =require("../controller/PaymentController");


router.get("/", meal_type .apiHome);
// meals routing
router.get("/get-meal-types",meal_type .getMealTypes);
router.post("/add-meal-type",meal_type .addMealType);

// location-routing
router.get("/get-location",location.getLocationList);
router.post("/add-location",location.addLocationList);
router.get("/get-location-by-city",location.getLocationByCity);

//restaurant-routing
router.get("/get-restaurant",restaurant.getRestaurantList);
router.post("/add-restaurant",restaurant.addRestaurantList);
router.get("/get-restaurant-by-id/:id",restaurant.getRestaurantDetailsById);
router.get("/get-restaurant-by-location-id",restaurant.getRestaurantLocationId);
router.post("/filter",restaurant.filterRestaurant);

//menu_items
router.get("/get-menu-items",menu_items.getMenuItems);
router.post("/add-menu-items",menu_items.addMenuItems);

//users
router.post("/sign-up", users.usersSignUp);
router.post("/login",users.userLogin);

//payment
router.post("/payment", paymentController.payment); // react
router.post("/callback", paymentController.callback); // internal

//exports
module.exports = router;