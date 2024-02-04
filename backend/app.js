const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const registerRouter = require("./router/registerRoute");
const cors = require('cors');
app.use(cors({
    origin: ["http://localhost:5173"],
  methods: ["GET,HEAD,PUT,PATCH,POST,DELETE"],
  // Access-Control-Allow-Origin: 
  // allowedHeaders: '*',
  // allowedHeaders:'Authorization',
  credentials:true
}));
// app.options('*', cors())
// app.use((req, res, next) => {
//   // res.setHeader("Access-Control-Allow-Origin", "*");
//   // res.setHeader("Access-Control-Allow-Methods", "POST, GET, PUT,DELETE");
//   // res.setHeader("Access-Control-Allow-Headers", "Content-Type");
//   response.setHeader("Access-Control-Allow-Origin", "http://127.0.0.1:5173");
// response.setHeader("Access-Control-Allow-Credentials", "true");
// response.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
// response.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
//   next();
// })

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