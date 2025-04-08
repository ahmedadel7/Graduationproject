
const express = require('express');
 const dotenv = require('dotenv');
const morgan = require('morgan');
const cors = require('cors');

const CustomerRouter=require("./routes/Customer")
const companyRouter=require("./routes/Companies")
const ReviewRouter=require("./routes/Review")
const initiateDBConnection = require('./config/db');
const AdminRouter=require("./routes/Admin")
const ComplaintRouter=require("./routes/Complaint")

dotenv.config({
    path: './config/.env',
});

const PORT = process.env.PORT;

const app = express();
app.use(morgan('dev'));
app.use(express.json());
app.use(cors());

 app.use("/Customers",CustomerRouter)
 app.use("/Companies",companyRouter)
 app.use("/Reviews",ReviewRouter)
 app.use("/Admins",AdminRouter)
 app.use("/Complaints",ComplaintRouter)
//  app.use('/endpoint', async (req, res) => {
//   try {
//     const response = await axios.post('http://localhost:5000/','the company is very good');
//     // Handle the response from Flask API
//     res.json(response.data);
//   } catch (error) {
//     // Handle the error
//     console.error(error);
//     res.status(500).json({ error: 'An error occurred' });
//   }
// });
app.listen(PORT, async () => {
    console.log(`Server has been started and is listening to port ${PORT}`);
    // Call the asynchronous function to initiate the DB connection once the server starts listening.
    await initiateDBConnection();
  });
