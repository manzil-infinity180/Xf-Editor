/*
email 
password
*/
import styles from "./Login.module.css"
import {Link, useNavigate} from "react-router-dom"
import { useState } from "react";
import { useAuth } from "../../utils/useAuth";
function Login(){
    const navigate = useNavigate();
    const {LoginFetch} = useAuth();
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
    
    LoginFetch(post,navigate);
  }
    return <>
    <div>

   
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