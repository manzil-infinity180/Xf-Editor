/*
email 
password
*/
import styles from "./Login.module.css"
import {Link, useNavigate} from "react-router-dom"
import { useState } from "react";
import toast from "react-hot-toast";
const background = "https://images.unsplash.com/photo-1536273513130-d8477e6e4389?q=80&w=2792&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
function Login(){
    const navigate = useNavigate();
  const [post , setPost]= useState({
    email:'',
    password:''
  });
  console.log(post)
  const handleInput = (e)=>{
    setPost({
      ...post,
      [e.target.name]:e.target.value
    })
  }
  const handleSubmit = async (e)=>{
    e.preventDefault();
    
    try{
      let url = 'http://localhost:7007/api/v1/login';
  const response = await fetch(url,{
    method : "post",
    body: JSON.stringify({email:post.email,password:post.password}),
    headers : {
      'Content-type':'application/json'
    }
  });
  const {data} = await response.json();
  console.log(data.user);
  // const {name} = data;
  // console.log(name)
  
  if (!response.ok) {
    const error = new Error('An error occurred while fetching the events');
    toast.error('Enter correct email and Password')
    error.code = response.status;
    error.info = data
    throw error;
  }else{
    toast.success(`Welcome ${data.user.name}`);
    navigate('/');
  }

    }catch(err){
      console.log(err);
    }
   

  }
    return <>
    <div>

   <div className={styles.imageDiv} style={{ backgroundImage: `url(${background})` }}>Image</div>
    <form className={styles.form} onSubmit={handleSubmit}>
    <h1 className={styles.loginTxt}>Login</h1>
        <div className={styles.container}>
            <div className={styles.containerChild}>
        <label className={styles.label} htmlFor="email"><b>Email / Username</b> </label>
        <input className={styles.input}
         type="text" id="email" 
         placeholder="Enter your Email or Username" 
         name="email" 
         
         onChange={handleInput}
         />
        </div>
        <div className={styles.containerChild}>
       <label className={styles.label} htmlFor="password"><b>Password</b> </label>
        <input className={styles.input} 
        type="password" id="password" 
        placeholder="Enter your Password" name="password" 
        
        onChange={handleInput}
        />
       
        </div>
        <div>

        </div>
        <div>
        <button className={styles.loginBtn} type="submit" style={{fontSize:"1.1rem"}}>Login</button>
        <Link to="/forgot-password" style={{textDecoration:"none"}}>Forgot Password ?</Link>
        <div className={styles.signUp}>
       <p>Don&apos;t have an account? <Link to="/register" style={{textDecoration:"none"}}><b>Sign up</b></Link></p>
        </div>
        </div>
        </div>
       
    </form>
    </div>
    </>
}
export default Login;