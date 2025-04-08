const {Schema,model}=require("mongoose")

const customerSchema=new Schema({
name:{
    type:"String",
    required:true
},
username:{
    type:"String",
    required:true
},
email:{
    type:"String",
    required:true
},
password:{
    type:"String",
    required:true
},
Address:{
    type:"String",
    required:true
},
DOB:{
    type:"String",
    required:true
},
gender:{
    type:"String",
    required:true
}

})
const CustomerModel=model("Customer",customerSchema);
module.exports=CustomerModel;