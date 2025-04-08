const CompaniesServices=require("../services/Companies")
module.exports.GetCompanies=async(req,res)=>{
    try {
        const Company=await CompaniesServices.GetAllCompanies();
        res.send({Company});

    } catch (error) {
        res.status(500);
        res.send({
            error:"Could not find Company"
        });
    }
}
module.exports.AddCompany=async(req,res)=>{
    
    const CompanyInfo={
        company_name:req.body.company_name,
        Company_Description:req.body.Company_Description,
        company_Reputation:req.body.company_Reputation
    
    }
    try {
        const AddCompany=await CompaniesServices.AddCompany(CompanyInfo);
        return res.status(201).send({
            msg:"Company created successfully",
            Company_id:AddCompany._id
        })
    } catch (error) {
        return res.status(500).send({
            error:error.message
        })
    }
}