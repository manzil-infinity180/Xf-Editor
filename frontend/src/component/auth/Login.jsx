/*
email 
password
*/
import styles from "./Login.module.css"
import {Link} from "react-router-dom"
const background = "https://images.unsplash.com/photo-1536273513130-d8477e6e4389?q=80&w=2792&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
function Login(){
    return <>
    <div>

   <div className={styles.imageDiv} style={{ backgroundImage: `url(${background})` }}>Image</div>
    <form className={styles.form}>
    <h1 className={styles.loginTxt}>Login</h1>
        <div className={styles.container}>
            <div className={styles.containerChild}>
        <label className={styles.label} htmlFor="email"><b>Email</b> </label>
        <input className={styles.input} type="text" id="email" placeholder="Enter your Email-id" name="email" />
        </div>
        <div className={styles.containerChild}>
       <label className={styles.label} htmlFor="password"><b>Password</b> </label>
        <input className={styles.input} type="password" id="password" placeholder="Enter your Password" name="password" />
       
        </div>
        <div>

        </div>
        <div>
        <button className={styles.loginBtn} type="submit">Login</button>
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