require('dotenv').config();
let express = require('express');
let app = express();
//app.get("/",function(req,res){
  //res.send("Hello Express")
//});

var response = "Hello json";
if (process.env.MESSAGE_STYLE) {
  response = "Hello json".toUpperCase();
}
app.get("/json",(req, res)=>{res.json({"message":response})});



































 module.exports = app;
