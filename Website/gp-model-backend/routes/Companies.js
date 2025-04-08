const { Router } = require("express");
const CompanyController = require("../controller/Companies");

const CompanyRouter = Router();
CompanyRouter.get("/", CompanyController.GetCompanies)
CompanyRouter.post("/",CompanyController.AddCompany)
module.exports = CompanyRouter;