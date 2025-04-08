const { token } = require("morgan");
const ComplaintsModel=require("../model/Complaint");


module.exports.GetAllComplaints=async()=>{
    try {
       
        const Complaint=await ComplaintsModel.find();
        return Complaint;
        
    } catch (error) {
        throw new Error("Could not retrive Complaint")
    }
}
module.exports.MakeComplaint=async(ComplaintInfo)=>{
    try {
        const Complaint=new ComplaintsModel({
            userName:ComplaintInfo.userName,
            email:ComplaintInfo.email,
            description:ComplaintInfo.description,  
            prediction:ComplaintInfo.prediction
      
        });
        // const addprop = await ComplaintsModel.findByIdAndUpdate({_id:Complaint._id}, {$push:{Complaint:Complaint._id}});
        
        const data= {
            userName: ComplaintInfo.userName,
          
            email: ComplaintInfo.email,
            description: ComplaintInfo.description,
          
       
            
        }
       

        const createdComplaint=await Complaint.save();
        return createdComplaint;
    } catch (error) {
        console.log(error);
    }
}
module.exports.removeComplaint = async (ComplaintId) => {
    try {
      await ComplaintsModel.deleteOne({ _id: ComplaintId });
    } catch (err) {
      throw new Error('Could not remove product.');
    }
  };