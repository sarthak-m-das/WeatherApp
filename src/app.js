const express = require('express')
var bodyParser = require('body-parser')
var ejs = require('ejs')
var path = require('path')
var getWether = require('./utils/api')

const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }))
const public=path.join(__dirname,'../public')
app.use(express.static(public))


app.get("/",(req,res)=>{
    res.render("home")
})

app.get("/weather",(req,res)=>{
    if(!req.query.address){
        return res.send({ error: "You must provide an address.",address:req.query.address, forcast:undefined, temp:undefined })
    }

    getWether(req.query.address,({error,forecast,temp})=>{
        if(error){
            return res.send({ error,address:req.query.address, forcast:undefined,temp:undefined })
        }
        return res.send({error:undefined,address:req.query.address, forcast:forecast,temp:temp})
    })
})

app.get("/about",(req,res)=>{
    res.render("about")
})

app.get("/help",(req,res)=>{
    res.render("help")
})

app.get("/:path",(req,res)=>{
    res.render("404")
})

app.listen(3000,()=>{
    console.log("Server is running on port 3000!!")
})