const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express(); //instance of express
const port = 8000;
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose
  .connect(
    "mongodb+srv://chethanasreer:chethana@cluster0.udd8ia8.mongodb.net/",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("connected to MongoDB");
  })
  .catch((error) => {
    console.log("Error connecting to MongoDB", error);
  });
app.listen(port, () => {
  console.log("Server is running on port 8000");
});

const Employee = require("./models/employee");
const Attendance = require("./models/attendance");

app.post("/addEmployee", async (req, res) => {
  try {
    const {
      employeeName,
      employeeId,
      designation,
      phoneNumber,
      dateOfBirth,
      joiningDate,
      activeEmployee,
      salary,
      address,
    } = req.body;

    //create new employee
    const newEmployee = new Employee({
      employeeName,
      employeeId,
      designation,
      phoneNumber,
      dateOfBirth,
      joiningDate,
      activeEmployee,
      salary,
      address,
    });
    await newEmployee.save();

    res,status(201).json({message:"Employee ave succesfully",employee:newEmployee})
  } catch (error) {
    console.log("Error creatig employee", error);
    res.status(500).json({ message: "Failer to add an employee" });
  }
});



//fetch all employee
app.get("employees",async(req,res)=>{
    try{
        const employees = await Employee.find();
        res.status(200).json(employees);
    }catch(error){
        res.status(500).json({message:"Failed to retrieve the employee"})
    }
})