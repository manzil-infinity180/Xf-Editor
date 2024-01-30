const Register = require("../model/registerModel");
const sendCookies = require("../utils/sendCookies");
const sendEmail = require("../utils/sendEmail");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
/*
exports.createUser = async(req,res,next)=>{
    try{


        res.status(200).json({
            status:"Success",
            
            data:{
              allRegistee
            }
        });
    }catch(err){
        res.status(404).json({
            status:"Failed",
            data:{
              err:err.message
            }
          })
    }
}
*/
exports.getAllUser = async(req,res,next)=>{
    try{
        console.log("here");
        
        console.log(req.user);
        
     const user = await Register.find();
console.log(user);

        res.status(200).json({
            status:"Success",
            
            data:{
              user
            }
        });
    }catch(err){
        es.status(404).json({
            status:"Failed",
            data:{
              err:err.message
            }
          })
    }
}
exports.createUser = async(req,res,next)=>{
    try{
        console.log(req.body);
        const user = await Register.create({
            name:req.body.name,
            email:req.body.email,
            password:req.body.password,
            username:req.body.username
        });
        console.log(user);
        await sendEmail({
            email : user.email,
            subject : 'Xf Editor Registration Successfully 🦾',
            // html : '<h3>Thank You for Using Xf Editor</h3>',
            message : `Thank You for Using Xf Editor`
        });
        await sendCookies(user,res);
        console.log(req.cookies);


        res.status(200).json({
            status:"Success",
            data:{
              user
            }
        });
    }catch(err){
        res.status(404).json({
            status:"Failed",
            data:{
              err:err.message
            }
          })
    }
}
/* 
Login : 
via username or email & password 

*/
exports.login = async(req,res,next)=>{
    try{
        let user;
        if(!((req.body.email || req.body.username) && req.body.password)){
            throw new Error("Please entered both email/username & password ")
        }
      if(req.body.email)
       user = await Register.findOne({email: req.body.email});
      if(req.body.username){
        user = await Register.findOne({username: req.body.username});
      }
      if(!user){
        throw new Error("User Does not Exist with these EMAIL or Username!!!");
      }
      console.log(user.password);
      const comparePassword = await bcrypt.compare(req.body.password,user.password);
      console.log(comparePassword);
      
      
      if(!comparePassword){
        throw new Error("Incorrect Password & Email!");
      }
      await sendCookies(user,res);
      console.log(req.cookies);
      await sendEmail({
        email : user.email,
        subject : 'Xf Editor Login Successfully 🦾',
        message : `Welcome ${user.username},you are successfully logined to Xf Editor.`
    });

        res.status(200).json({
            status:"Success",
            data:{
              user
            }
        });
    }catch(err){
        console.log(err);

        res.status(404).json({
            status:"Failed",
            data:{
              err: err.message
            }
          })
    }
}

exports.updateMe = async(req,res,next)=>{
    try{
    const user = await Register.findByIdAndUpdate(req.user,req.body);
    console.log(user);

        res.status(200).json({
            status:"Success",
            
            // data:{
            //   allRegistee
            // }
        });
    }catch(err){
        res.status(404).json({
            status:"Failed",
            data:{
              err:err.message
            }
          })
    }
}
exports.myself = async(req,res,next)=>{
  try{
  const user = await Register.findById(req.user);
  console.log(user);

      res.status(200).json({
          status:"Success",
          data:{
            user
          }
          
      });
  }catch(err){
      res.status(404).json({
          status:"Failed",
          data:{
            err:err.message
          }
        })
  }
}
// exports.forgotPassword = async(req,res,next)=>{
//   try{
//     let digits = "0123456789";
//     OTP = "";

//     for (let i = 0; i < 4; i++) {
//       OTP += digits[Math.floor(Math.random() * 10)];
//     }


//   }catch(err){

//   }
// }
exports.isAuthenticated = async (req,res,next) =>{
    try{
      let token;
      console.log(req.cookies.jwt);
      if(req.cookies.jwt){
        token = req.cookies.jwt;
      }
      console.log(token)
      if(!token){
        throw new Error("OOPs, Firstly you have to logined in !!");
      }
      const decode = jwt.verify(token,process.env.JWT_SECRET);
      console.log(decode);
      const currentloginedUser = await Register.findById(decode.id);
    //   console.log(currentloginedUser);
      req.user = currentloginedUser;
      console.log("here ->")
      console.log(req.user);
      next();
    // res.status(200).json({
    //     status:"success",
    //     data:{
    //         currentloginedUser
    //     }
    // })
  
    }catch(err){
        console.log(err);
      res.status(404).json({
        status:"Failed",
       err: err.message
      })
    }
  }

  /*
  when user click on " forgotPassword " the reset url has been send to user email id 
  then he click on that and 
  */
 exports.forgotPassword = async (req,res,next) => {
  try{
    if(!req.body.email){
      throw new Error("Please enter email only");
    }
    const user = await Register.findOne({email:req.body.email});
    const token = jwt.sign({id:user._id},process.env.JWT_SECRET);
    console.log(token);
    const url = `http://localhost:5173/reset-password/`+token;
    await sendEmail({
      email : user.email,
      subject : 'Xf reset Password link',
      message : `Welcome ${user.username},here is your ${url}`
  });

    const yourid = jwt.verify(token,process.env.JWT_SECRET);
    console.log({"id":user._id,
  "yourId":yourid});

    
  
        res.status(200).json({
            status:"Success",
            data:{
              user
            }
            
        });
    }catch(err){
      console.log(err);
        res.status(404).json({
            status:"Failed",
            data:{
              err:err.message
            }
          })
    }
 }


