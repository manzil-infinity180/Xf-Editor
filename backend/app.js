const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const registerRouter = require("./router/registerRoute");

app.use(express.json());
app.use(cookieParser());

app.use('/api/v1',registerRouter);
app.get('/',(req,res)=>{
    res.send("Heellooo!!!!");
})

module.exports = app;