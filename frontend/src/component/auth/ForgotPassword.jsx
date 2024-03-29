import { useState } from "react";
import { useAuth } from "../../utils/useAuth";
import styles from "./Login.module.css"
import {Link} from "react-router-dom"
function ForgotPassword(){
    const [post,setPost] = useState("");
   const {ForgotPasswordFetch}=useAuth();
    function handleSubmit(e){
        e.preventDefault();
        ForgotPasswordFetch(post);

    }
    return <>
    <div>
   <div>Image</div>
    <form className={styles.form} onSubmit={handleSubmit}>
    <h1 className={styles.loginTxt}>Forgot Password</h1>
    <p style={{fontSize:"1.1rem"}}>Enter your email, or username and we&apos;ll send you a link to get back into your account.</p>
        <div className={styles.container}>
            <div className={styles.containerChild}>
        <label className={styles.label} htmlFor="email"><b>Email/Username</b> </label>
        <input className={styles.input} type="text" id="email" 
        placeholder="Enter your Email or Username" 
        name="email"
        value={post}
        onChange={(e)=>setPost(e.target.value)} />
        </div>
  
        <div>

        </div>
        <div>
        <button className={styles.loginBtn} type="submit" style={{fontSize:"1.1rem"}}>Send login link</button>
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
export default ForgotPassword;