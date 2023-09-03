const express=require('express');
const dotenv=require('dotenv');

const app=express();
dotenv.config({
    path:"./config/.env"
})
app.use(express.json());


app.get("/",(req,res)=>{
    res.send("hello this is SIH Project");
})

//middleware for handling error
app.use((err, req, res, next)=>{
    const status=err.status || 500;
    const message=err.message || "Something went wrong";
    return res.status(status).json({
     succcess:false,
     status,
     message
    })
})

module.exports = {app};
