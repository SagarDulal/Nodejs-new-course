const express = require("express");
const app = express();
const dotenv =require("dotenv")
const connectDB = require('./config/connectDB')
dotenv.config();


//Routes
app.get("/", (req, res)=>{
    res.send("Home Page");
})


const PORT = process.env.PORT || 5000;


const startServer = async() =>{
    try{
        await connectDB();
        app.listen(PORT,()=>{
            console.log(`Server running on port ${PORT}`)
        })
    }
    catch(error){
        console.log(error.message)
    }
};
startServer();


