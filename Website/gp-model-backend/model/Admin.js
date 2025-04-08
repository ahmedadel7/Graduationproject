const {Schema,model}=require("mongoose")

const AdminSchema=new Schema({

username:{
    type:"String",
    required:true
},
email:{
    type:"String",
    required:true
},
password:{
    type:"String",
    required:true
},
Address:{
    type:"String",
    required:true
},
DOB:{
    type:"String",
    required:true
},
gender:{
    type:"String",
    required:true
}

})
const AdminModel=model("Admin",AdminSchema);
module.exports=AdminModel;