const {Schema,model}=require("mongoose")
const complaintSchema=new Schema({
userName:{
    type:"String",
    required:true
},
email:{
    type:"String",
    required:true
},

description:{
    type:"String",
    required:true
},
prediction:{
    type:"String",
    required:true
}


})
const ComplaintsModel=model("Complaint",complaintSchema);
module.exports=ComplaintsModel;