const Register = require("../model/registerModel");
const sendCookies = require("../utils/sendCookies");
const sendEmail = require("../utils/sendEmail");
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
        es.status(404).json({
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


