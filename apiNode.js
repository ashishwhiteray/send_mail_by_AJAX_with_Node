var express = require("express");
var path = require("path");
var app = express();
var bodyParser = require('body-parser');
var cors = require ('cors');

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

app.use(cors());

//--------------Creating POST API--------------

app.post('/', async function(req,res){

    console.log("This is the JSON data, getting from AJAX on frontend ", req.body);
   
})
app.listen('3000', function(){
    console.log("Server is running on port no. 3000");
});
