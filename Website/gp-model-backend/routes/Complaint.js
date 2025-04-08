const { Router } = require("express");
const ComplainValidation=require("../validation/Complaint")
const ComplaintsController=require("../controller/Complaint");
const ComplaintMiddleWare=require("../middelwares/authorization")
const ComplaintRouter = Router();
ComplaintRouter.get("/", ComplaintsController.GetComplaints)
ComplaintRouter.post("/",ComplainValidation.validatePostComplaint(),ComplaintsController.MakeComplaint);
ComplaintRouter.delete("/:ComplaintId",ComplaintsController.deleteComplaint)
module.exports = ComplaintRouter;
