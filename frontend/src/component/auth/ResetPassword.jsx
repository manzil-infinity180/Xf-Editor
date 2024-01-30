import { useState } from "react";
import { useAuth } from "../../utils/useAuth";
import styles from "./Login.module.css"
import {Link, useParams} from "react-router-dom"
function ResetPassword(){
    const [post,setPost] = useState("");
    const token = useParams();
    console.log(token);
   const {ResetPasswordFetch}=useAuth();
    function handleSubmit(e){
        e.preventDefault();
        ResetPasswordFetch(post,token);

    }
    return <>
    <div>
    <form className={styles.form} onSubmit={handleSubmit}>
    <h1 className={styles.loginTxt}>Reset Password</h1>
    <p style={{fontSize:"1.1rem"}}>Enter your email, or username and we&apos;ll send you a link to get back into your account.</p>
        <div className={styles.container}>
            <div className={styles.containerChild}>
        <label className={styles.label} htmlFor="email"><b>Password</b> </label>
        <input className={styles.input} type="password" id="password" 
        placeholder="Enter your password" 
        name="password"
        value={post}
        onChange={(e)=>setPost(e.target.value)} />
        <label className={styles.label} htmlFor="email"><b>Confirm Password</b> </label>
        <input className={styles.input} type="password" id="confirm" 
        placeholder="Confirm Password" 
        name="confirmPassword" />
        </div>
  
        <div>

        </div>
        <div>
        <button className={styles.loginBtn} type="submit" style={{fontSize:"1.1rem"}}>Reset your Password</button>
        <Link to="/register" style={{textDecoration:"none"}}>Create New Account</Link>
        <div className={styles.signUp}>
       <p><Link to="/login" style={{textDecoration:"none"}}><b> Back to Login</b></Link></p>
        </div>
        </div>
        </div>
       
    </form>
    </div>
    </>
}
export default ResetPassword;