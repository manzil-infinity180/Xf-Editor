const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const registerRouter = require("./router/registerRoute");
const cors = require('cors');
app.use(cors({
    origin: ["http://localhost:5173"],
  methods: ["GET,HEAD,PUT,PATCH,POST,DELETE"],
  credentials:true
}));
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.json());
app.get("/message", (req, res) => {
    res.json({ message: "Hello from server!" });
  });

app.use('/api/v1',registerRouter);
app.get('/',(req,res)=>{
    res.send("Heellooo!!!!");
})

module.exports = app;