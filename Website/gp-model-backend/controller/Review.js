const ReviewService=require("../services/Reviews")
const axios=require("axios")
module.exports.GetReviews=async(req,res)=>{
    try {
        const Review=await ReviewService.GetAllReviews();
        res.send({Review});

    } catch (error) {
        res.status(500);
        res.send({
            error:"Could not find Reviews"
        });
    }
}

  

module.exports.AddReview=async(req,res)=>{
    
    const ReviewInfo={
        username:req.body.username,
        email:req.body.email,
        company:req.body.company,
        Review_Description:req.body.Review_Description
        
    }
    try {
       
     
         const response = await axios.post('http://localhost:5000',{"input":ReviewInfo.Review_Description});
            
            // Process the response
            const result = response.data;
            //   print(result)  
            // Return the result to the frontend
            // res.json(result);
            
            ReviewInfo["Prediction"]=result
            const AddReview=await ReviewService.AddReview(ReviewInfo);
        return res.status(201).send({
            msg:"Review created successfully",
            Review_id:AddReview._id
        })
    } catch (error) {
        return res.status(500).send({
            error:error.message
        })
    }
}

module.exports.deleteReview= async (req, res) => {
  
    try {
      await ReviewService.removeReview();
      return res.send({
        msg: 'Review deleted successfully.'
      });
    } catch (err) {
      return res.status(500).send({
        error: err.message
      });
    }
  };