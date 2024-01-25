import { useEffect, useState } from "react";
import {useMutation} from '@tanstack/react-query';
import styles from "./Register.module.css"
import createNewEvent, { queryClient } from "../../utils/server"
import { Link, useNavigate } from 'react-router-dom';
function Register(){
    // const [eventData,setEventData]= useState([]);
    const navigate = useNavigate();
  const {mutate,isPending,isError,error}=useMutation({
    mutationFn: createNewEvent,
    // onSuccess we will navigate 
    // we can do in a manner that we navigate to /events on submit but in that case the 
    // problem is that if any error happen we can not handle this as we directly navigate to /events page
      
    onSuccess: ()=>{

      navigate('/');
      // Invalidate one or more queries so allow that to tell the  react query the data is 
      // outdated we have to refetch the data 
    //   queryClient.invalidateQueries({queryKey : []})
    }
  })
  function handleSubmit(formData) {
    // e.preventDefault();
    console.log(formData);
    mutate({event : formData});
  
  }
    // useEffect(()=>{
    //     async function fetchData(){
    //         let url = 'http://localhost:7007/register';
    //      const response = await fetch(url,{
    //   method : "POST",
    //   body : JSON.stringify(eventData),
    //   headers : {
    //     'Content-type':"application/json"
    //   },
    //   credentials: true
    // });
    // if (!response.ok) {
    //     const error = new Error('An error occurred while fetching the events');
    //     error.code = response.status;
    //     error.info = await response.json();
    //     throw error;
    //   }
    // const data = await response.json();
    // console.log(data);
    //     }
    // },[eventData]);
    // function handleSubmit(formData,e){
    //   e.preventDefault();
    //     console.log(formData);
    //     eventData(formData);

    // } 
    return <>
    <div>

    <form className={styles.form} onSubmit={handleSubmit}>
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