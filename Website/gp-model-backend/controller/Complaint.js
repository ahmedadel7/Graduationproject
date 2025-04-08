const { isError } = require("joi");
const { Error, MongooseError } = require("mongoose");
const ComplaintsServices=require("../services/Complaint");
const{validationResult}=require('express-validator')
const axios=require("axios")
module.exports.GetComplaints=async(req,res)=>{
    try {
        const Complaint=await ComplaintsServices.GetAllComplaints();
        res.send({Complaint});

    } catch (error) {
        res.status(500);
        res.send({
            error:"Could not find Complaints"
        });
    }
}
module.exports.MakeComplaint=async(req,res)=>{
    const validationErrors = validationResult(req).array();
    if (validationErrors.length > 0) {
      const firstError = validationErrors[0];
      return res.status(422).send({
        error: firstError.msg
      });
    }
        const ComplaintInfo={
            userName:req.body.userName,
            email:req.body.email,
            description:req.body.description
        }
        try {
       
     
          const response = await axios.post('http://localhost:5000',{"input":ComplaintInfo.description});
             
             // Process the response
             const result = response.data;
             //   print(result)  
             // Return the result to the frontend
             // res.json(result);
           
             ComplaintInfo["prediction"]=result
      
            const SubmitComplaint=await ComplaintsServices.MakeComplaint(ComplaintInfo);
            return res.status(201).send({
                msg:"Complaint created successfully",
                Complaint_id:SubmitComplaint._id
            })
        } catch (error) {
            return res.status(500).send({
                error:error.message
            })
        }
}
module.exports.deleteComplaint = async (req, res) => {
    const ComplaintId = req.params.ComplaintId;
    try {
      await ComplaintsServices.removeComplaint(ComplaintId);
      return res.send({
        msg: 'Complaint deleted successfully.'
      });
    } catch (err) {
      return res.status(500).send({
        error: err.message
      });
    }
  };