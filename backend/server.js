const dotenv = require("dotenv");
dotenv.config({path: "./config.env"});
const mongoose = require("mongoose");
const port = process.env.PORT || 7007;
const app = require("./app");
const DB = process.env.DATABASE.replace('<PASSWORD>',process.env.PASSWORD);

mongoose.connect(DB).then(()=>{
    console.log("Connected to database");
});

app.listen(port,()=>{
    console.log("Sever running on port "+port);
});
