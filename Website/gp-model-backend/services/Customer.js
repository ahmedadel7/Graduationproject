const CustomerModel=require("../model/Customers")
const bcrypt = require('bcrypt');
module.exports.GetAllCustomers=async()=>{
    try {
        const Customer=await CustomerModel.find();
        return Customer;

    } catch (error) {
        throw new Error("Could not retrive Customers")
    }
}
module.exports.AddCustomer=async(CustomerInfo)=>{
    
    try {
        var hashedPassword = await bcrypt.hash(CustomerInfo.password,12);
        const Customer=new CustomerModel({
            name:CustomerInfo.name,
            username:CustomerInfo.username,
            email:CustomerInfo.email,
            password:hashedPassword,
            Address:CustomerInfo.Address,
            DOB:CustomerInfo.DOB,
            gender:CustomerInfo.gender,
      
        });
        const createdCustomer=await Customer.save();
        return createdCustomer;
    } catch (error) {
      error:error.message
        
    }
}