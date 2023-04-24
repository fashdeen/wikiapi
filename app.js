
// setting up the constants and improting the packages to be used
const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
dotenv.config();
//const mysql = require("mysql");
//const bodyParser = require("body-Parser");

const bodyParser = require("body-parser");

const ejs = require("ejs");


const app = express();

var corsOptions = {
    origin: "*"
 };
 
 app.use(cors(corsOptions));

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(express.static("public"));



// set up a simple route just for testing

app.get("/", (req, res) =>{
    res.json({Message: "Welcome to our API Application."});
});

// List all the routes that were defined for the api in the route files

require('./app/routes/auth_routes')(app);



// invoke the location where the routes are located/ stored

require('./app/routes/auth_routes')(app);



// confirm that the server is running and setup
//app.listen(3000, function(){
app.listen(process.env.Port_Address, function (){
console.log("Server Stated on " + process.env.Port_Address) ;
});