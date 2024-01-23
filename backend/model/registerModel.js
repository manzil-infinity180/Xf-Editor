const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcrypt");
/*
schema : 
username 
name 
email
password 

*/
const registerSchema = new mongoose.Schema({
     name: {
        type: String,
        required:[true,'Registration without Name is NOT Possible']
     },
     email:{
        type:String,
        required:[true,'User cannot without email-Id'],
        unique:[true,'User Already exist with this email,enter another one'],
        lowercase:true,
        validate : [validator.isEmail,'Please Provide Valid Email'],
        match: [/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, 'Please enter a valid email'],
     },
     username : {
        type:String,
        required:[true,'Username is required field'],
        unique:[true,"Username already exist"]
     },
     password : {
        type:String,
        required:[true,"Password is required field"]
     }
});

registerSchema.pre('save',async function(next){
    if(!this.isModified('password')) return next();
    this.password = await bcrypt.hash(this.password,10); // 10 is salt 
    next();
 });

 const Register = mongoose.model('Register',registerSchema);
 module.exports = Register;