const { Router } = require("express");
const CustomerController = require("../controller/Customer");
const CustomerValidation=require("../validation/signup")
const CustomerRouter = Router();
CustomerRouter.get("/", CustomerController.GetCustomers)

CustomerRouter.post("/signin",CustomerController.postLogin)
CustomerRouter.post("/signup",CustomerValidation.validatePostUser() ,CustomerController.AddCustomer)
module.exports = CustomerRouter;