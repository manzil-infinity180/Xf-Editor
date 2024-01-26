const dotenv = require("dotenv");
dotenv.config({path: "./config.env"});
const mongoose = require("mongoose");
const app = require("./app");
// const socketIo = require('socket.io');
// const http = require('http');
// const server = http.createServer(app)
// const io = socketIo(server,{ 
//     cors: {
//       origin: 'http://localhost:5173'
//     }
// })
// io.on('connection',(socket)=>{
//     console.log('client connected: ',socket.id)
    
//     socket.join('clock-room')
    
//     socket.on('disconnect',(reason)=>{
//       console.log(reason)
//     })
//   })
//   setInterval(()=>{
//     io.to('clock-room').emit('time', new Date())
// },1000)

const port = process.env.PORT || 7007;
const DB = process.env.DATABASE.replace('<PASSWORD>',process.env.PASSWORD);

mongoose.connect(DB).then(()=>{
    console.log("Connected to database");
});

app.listen(port,()=>{
    console.log("Sever running on port "+port);
});
