const {Schema,model}=require("mongoose")

const companiesSchema=new Schema({
company_name:{
    type:"String",
    required:true
},
Company_Description:{
    type:"String",
    required:true
},
company_Reputation:{
    type:"String",
    required:true
},

})
const CompaniesModel=model("Company",companiesSchema);
module.exports=CompaniesModel;