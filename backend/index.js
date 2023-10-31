const express = require('express');
const app = express();
require('./db/db')
const collection = require('./db/modul');
const PORT = process.env.PORT || 3000;
const cors = require('cors');
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors());



app.get("/getdata",async (req,res)=>{
try {
    const data = await collection.find({})
    res.send(data);
// console.log(data);
} catch (error) {
    console.log(error);
}
})

app.post("/createdata",async(req,res)=>{
try {
    const {text,author}=req.body;
    const dataobj = new collection({
        text,
        author
    })
    await dataobj.save();
    const find=await collection.find({})
    res.status(200).send("your quots added")
} catch (e) {
    console.log(e);
}
})



app.listen(PORT,()=>{
    console.log(`app is start in ${PORT}`);
})