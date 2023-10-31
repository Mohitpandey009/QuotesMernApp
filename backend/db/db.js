const mongoose = require('mongoose')
const db = process.env.DB;
const con=mongoose.connect("mongodb://127.0.0.1:27017/db").then(()=>{
    console.log("database ready");
}).catch((err)=>{
    console.log("check database code "+err);
})

module.exports=con;