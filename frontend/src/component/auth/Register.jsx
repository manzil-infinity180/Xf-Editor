import { useState } from "react";
import toast from 'react-hot-toast';
// import {useMutation} from '@tanstack/react-query';
import styles from "./Register.module.css"
import { Link,useNavigate } from 'react-router-dom';
// import axios from "axios";
import { useAuth } from "../../utils/useAuth";
function Register(){
  const navigate = useNavigate();
  const {RegisterFetch} = useAuth();
  const [post , setPost]= useState({
    name:'',
    email:'',
    username:'',
    password:''
  });
  const handleInput = (e)=>{
    setPost({
      ...post,
      [e.target.name]:e.target.value
    })
  }
  const handleSubmit = async (e)=>{
    e.preventDefault();
    RegisterFetch(post,navigate);
    
  }
   

    return <>
    <div>

    <form className={styles.form} onSubmit={handleSubmit}>
    <h1 className={styles.loginTxt}>Register</h1>
        <div className={styles.container}>
        <div className={styles.containerChild}>
        <label className={styles.label} htmlFor="name"><b>Name</b> </label>
        <input className={styles.input} type="text" id="name" placeholder="Enter your Name" 
        name="name" 
         onChange={handleInput}
        />
        </div>
        <div className={styles.containerChild}>
        <label className={styles.label} htmlFor="email"><b>Email</b> </label>
        <input className={styles.input} type="email" id="email" placeholder="Enter your Email-id" name="email"
          onChange={handleInput}
          />
        </div>
        <div className={styles.containerChild}>
        <label className={styles.label} htmlFor="username"><b>Username</b> </label>
        <input className={styles.input} type="text" id="username" placeholder="Enter your Username" 
        name="username" 
         onChange={handleInput}
        />
        </div>
        <div className={styles.containerChild}>
       <label className={styles.label} htmlFor="password"><b>Password</b> </label>
        <input className={styles.input} type="password" id="password" placeholder="Enter your Password"
         name="password"
          onChange={handleInput}
          />
        </div>

        <div>
        <button className={styles.loginBtn} type="submit" style={{fontSize:"1.1rem"}}>Register</button>
        {/* <Link to="/forgot-password" style={{textDecoration:"none"}}>Forgot Password ?</Link> */}
        <div className={styles.signUp}>
       <p>Already have account? <Link to="/login" style={{textDecoration:"none"}}><b>Login</b></Link></p>
        </div>
        </div>
        </div>
       
    </form>
    </div>
    </>
}
export default Register;