const CustomerServices=require("../services/Customer")
const AuthService=require("../services/auth")
module.exports.GetCustomers=async(req,res)=>{
    try {
        const Customer=await CustomerServices.GetAllCustomers();
        res.send({Customer});

    } catch (error) {
        res.status(500);
        res.send({
            error:"Could not find Customer"
        });
    }
}

module.exports.AddCustomer=async(req,res)=>{
    
    const CustomerInfo={
        name:req.body.name,
        username:req.body.username,
        email:req.body.email,
        password:req.body.password,
        Address:req.body.Address,
        DOB:req.body.DOB,
        gender:req.body.gender

    }
    try {
        const AddCustomer=await CustomerServices.AddCustomer(CustomerInfo);
        return res.status(201).send({
            msg:"Customer created successfully",
            Customer_id:AddCustomer._id
        })
    } catch (error) {
        return res.status(500).send({
            error:error.message
        })
    }
}
module.exports.postLogin = async (req, res) => {

    const { username, password } = req.body;
    try {
     
        const Customer = await AuthService.checkCredentials(username, password);
      if (!Customer) {
        return res.status(401).send({
          error:
            'Invalid credentials, please enter the correct username and password.'
        });
      }
  
      const jwt = await AuthService.generateCJWT(Customer);
      res.send({
        CustomerId: Customer._id,
        username: Customer.username,
        type:"Customer",
        jwt: jwt,
        message: 'Logged in successfully.'
      });
    } catch (err) {
      res.status(500).send({
        error: err.message
      });
    }
  };
  module.exports.Signup = async (req, res) => {
    
    try {
      const CustomerInfo = {
        name: req.body.name,
        username: req.body.username,
        email:req.body.email,
        Password: req.body.Password,
        Address:req.body.Address,
        DOB:req.body.DOB,
        Gender:req.body.Gender
        
      };
  
      const CutomerExists = await AuthService.doesUserExist(CustomerInfo.username);
      if (CutomerExists) {
        return res.status(422).send({
          error: 'A user with the same username already exists.'
        });
      }
      const CutomerExists1 = await AuthService.doesEmailExist(CustomerInfo.username);
      if (CutomerExists1) {
        return res.status(422).send({
          error: 'A user with the same username already exists.'
        });
      }
  
      const AddCustomer=await AuthService.createUser(CustomerInfo);
      return res.status(201).send({
        msg:"Customer created successfully",
        Customer_id:AddCustomer._id
    })
    } catch (error) {
      res.status(500).send({
        error: error.message
      });
    }
  };