const CompaniesModel=require("../model/Companies")
const bcrypt = require('bcrypt');
module.exports.GetAllCompanies=async()=>{
    try {
        const Company=await CompaniesModel.find();
        return Company;

    } catch (error) {
        throw new Error("Could not retrive Company")
    }
}
module.exports.AddCompany=async(CompanyInfo)=>{
    
    try {

        const Company=new CompaniesModel({
            company_name:CompanyInfo.company_name,
            Company_Description:CompanyInfo.Company_Description,
            company_Reputation:CompanyInfo.company_Reputation
           
      
        });
        const createdCompany=await Company.save();
        return createdCompany;
    } catch (error) {
      error:error.message
        
    }
}