const jwt = require("jsonwebtoken");
const sendCookies = async (user,res)=>{
   // tokenizing it using the automatically created mongodb _id 
   if(!user._id) throw new Error("Something went wrong!");
    const token = jwt.sign({id:user._id},process.env.JWT_SECRET);

    await res.cookie('jwt',token,{
        expires: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000),
        httpOnly: true,
        secure : false
      });
}
module.exports = sendCookies;