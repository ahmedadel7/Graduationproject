const ReviewModel=require("../model/Reviews")

module.exports.GetAllReviews=async()=>{
    try {
        const Review=await ReviewModel.find();
        return Review;

    } catch (error) {
        throw new Error("Could not retrive Reviews")
    }
}
module.exports.AddReview=async(ReviewInfo)=>{
    
    try {

        const Review=new ReviewModel({
          
            username:ReviewInfo.username,
            email:ReviewInfo.email,
            company:ReviewInfo.company,
            Review_Description:ReviewInfo.Review_Description,
            Prediction:ReviewInfo.Prediction
      
        });
        const createdReview=await Review.save();
        return createdReview;
    } catch (error) {
      error:error.message
        
    }
}
module.exports.removeReview= async (ReviewId) => {
  
    try {
      const response = await axios.post('http://127.0.0.1:5000','the company is very good');
      // Handle the response from Flask API
      res.json(response.data);
    } catch (error) {
      // Handle the error
      // console.error(error);  
      res.status(500).json({ error: 'An error occurred' });
    }

  };