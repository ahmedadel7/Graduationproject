const {Schema,model}=require("mongoose")

const ReviewSchema=new Schema({
username:{
    type:"String",
    required:true
},
email:{
    type:"String",
    required:true
},
company:{
    type:"String",
    required:true
},

Review_Description:{
    type:"String",
    required:true
},
Prediction:{
    type:"String",
    required:true
},

})
const ReviewModel=model("Review",ReviewSchema);
module.exports=ReviewModel;