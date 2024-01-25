import styles from "./Register.module.css"
import {Link} from "react-router-dom"
function Register(){
    return <>
    <div>

    <form className={styles.form}>
    <h1 className={styles.loginTxt}>Register</h1>
        <div className={styles.container}>
        <div className={styles.containerChild}>
        <label className={styles.label} htmlFor="name"><b>Name</b> </label>
        <input className={styles.input} type="text" id="name" placeholder="Enter your Name" name="name" />
        </div>
        <div className={styles.containerChild}>
        <label className={styles.label} htmlFor="email"><b>Email</b> </label>
        <input className={styles.input} type="email" id="email" placeholder="Enter your Email-id" name="email" />
        </div>
        <div className={styles.containerChild}>
        <label className={styles.label} htmlFor="username"><b>Username</b> </label>
        <input className={styles.input} type="text" id="username" placeholder="Enter your Username" name="username" />
        </div>
        <div className={styles.containerChild}>
       <label className={styles.label} htmlFor="password"><b>Password</b> </label>
        <input className={styles.input} type="password" id="password" placeholder="Enter your Password" name="password" />
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