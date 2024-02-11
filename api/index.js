const  express= require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

const app= express();//instance of express 
const port = 8000;
app.use(cors());

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

mongoose.connect("mongodb+srv://chethanasreer:chethana@cluster0.udd8ia8.mongodb.net/", {
    useNewUrlParser: true,
    useUnifiedTopology:true,
}).then(()=>{
    console.log("connected to MongoDB");
}).catch((error)=>{
    console.log("Error connecting to MongoDB", error);
});
app.listen(port,()=>{
    console.log("Server is running on port 8000")
})