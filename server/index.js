const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const app = express()
const nodemailer = require("nodemailer");
//Creating the middleware
app.use(cors())
app.use(express.json())

//Connecting to database
mongoose.connect("mongodb://127.0.0.1:27017/database").then(()=>{
  console.log("Database Connected...");
}).catch(()=>{
  console.log("Database failed to connect");
})

//Creating the model
const Employee = mongoose.model("Employee",{name:String,position:String,eid:Number,emailid:String},"Employee")

//Sending data to frontend from database
app.get("/employeeList",(req,res)=>{
  Employee.find().then((data)=>{
      res.send(data)
  })
})

//adding data to the database
app.post("/addEmployee",(req,res)=>{
  var name = req.body.name
  var eid = req.body.eid
  var position = req.body.position
  var email = req.body.email
  const newEmployee = new Employee({
      name:name,
      eid:eid,
      position:position,
      email:email
  })

  newEmployee.save().then(()=>{console.log("Saved Succesfully");})
})

//deleting the data from database
app.post("/deleteEmployee",(req,res)=>{
  var eid = req.body.eid
  Employee.deleteOne({eid:eid}).then(()=>{console.log("Deleted Succesfully");})
})



//Creating a transporter through the Gmail
const transporter = nodemailer.createTransport({
  service: "gmail",
  //Authentication process for sending mail by creating new app in google
  auth: {
    user: "firas020604@gmail.com",
    pass: "mrcd kwpc ldsc jsjg",
  },
});

app.post("/sendmail", function (req, res) {
  var report = req.body.report
  transporter.sendMail(
    {
      from: "firas020604@gmail.com",
      to: "muhammadfiras038@gmail.com",
      subject: "Work Report of an Employee",
      text: report
    },
    function (error, info) {
      if (error) {
        console.log(error);
        res.send("Error")
      }
      else {
        console.log(info);
        res.send("success")
      }
    }
  )
})

//Creating and running of the server
app.use("/",(req,res)=>{
  res.send("Server is running")
})

app.use(express.json())
app.listen(5000, () => {
  console.log("Server Started...");
})