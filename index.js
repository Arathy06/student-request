
var express = require('express')
var bodyParser = require('body-parser')

var app=express();


app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

app.get("/",(req,res)=>{

    res.send("Welcome")
})


app.post("/student",(res,req)=>{

var sname=req.body.name ;   
var rollno=parseInt(req.body.num);
var college=req.body.cname;
var phno=parseInt(req.body.ph);

res.status(200).json({"Name":sname,"rollno":rollno,"college":college,"Phonenumber":phno})


})


app.listen(process.env.PORT || 3000,(error)=>{

    if(error)
    {
        console.log("Error occured")
    }
    else
    {
        console.log("Server started")
    }
})