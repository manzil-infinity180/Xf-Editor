const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const app = express();

app.use(express.json());
app.use(cookieParser());

app.get('/',(req,res)=>{
    res.send("Heellooo!!!!");
})

module.exports = app;