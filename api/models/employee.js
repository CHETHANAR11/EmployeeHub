const mongoose= require('mongoose');

const employeeSchema = new mongoose.Schema({
    employeeId:{
        type:String,
        required:true,
        unique:true,
    },
    employeeName:{
        type:String,
        require:true,
    },
    designation:{
        type:String,
        require:true,
    },
    joiningDate:{
        type:String,
        require:true,
    },
    dateofBirth:{
        type:String,
        require:true,
    },
    salary:{
        type:Number,
        require:true,
    },
    activeEmployee:{
        type:Boolean,
        require:true,
    },
    phoneNumber:{
        type:String,
        require:true,
    },
    address:{
        type:String,
        require:true,
    },
    createdAt:{
        type:Date,
        default:Date.now,
    },
})

const Employee=mongoose.model("Employee",employeeSchema);

module.exports = Employee;