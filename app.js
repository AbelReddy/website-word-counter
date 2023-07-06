const express = require("express")
const bodyParser = require("body-parser");
const axios = require("axios")
const cheerio = require("cheerio")
const ejs =  require("ejs")
const app = express();



app.use(bodyParser.urlencoded({extended:true}))

app.use(express.static(__dirname));

app.set('view engine', 'ejs');

let value =[]
let subsite =[]
let splitted


app.get("/", function(req,res){
   
  

    res.render("index",{data:value, website:subsite})
    
    
})




app.post("/", function(req,res){
    const url = req.body.url;
     subsite.push(url)
   
  axios.get(url).then((res)=>{
   let info = res.data;
   let html = cheerio.load(info).text()
     splitted = html.split(/\s+/).length; 
     value.push(splitted)
    });
    
    res.redirect("/")
   
  
  

});


  
 

 




app.listen("1914", (req,res)=>{
    console.log("server is started")
})