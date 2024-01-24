/*
email 
password
*/
const style ={
    display:"flex",
    flexDirection:"column",
    justifyContent:"space-around", 
    margin:"100px 500px"
};

function Login(){
    return <>
    <h1>Login</h1>
    <form>
        <div style={style}>
            
        <label style={pstyle} htmlFor="email">Email </label>
        <input type="text" id="email" placeholder="Enter your Email-id" name="email" />
           
      
       <label htmlFor="password">Password </label>
        <input type="password" id="password" placeholder="Enter your Password" name="password" />
       
       
        <button type="submit">Login</button>
        </div>
    </form>
    </>
}
export default Login;