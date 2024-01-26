import {Link, Outlet,useNavigate} from 'react-router-dom';
import Header from '../Header';
import toast from "react-hot-toast";
function RootLayout(){
  const navigate = useNavigate();
  const handleSubmit = async (e)=>{
    e.preventDefault();
    
    try{
      let url = 'http://localhost:7007/api/v1/profile';
  const response = await fetch(url);
  const {data} = await response.json();
  console.log(data);
  // const {name} = data;
  // console.log(name)
  
  // if (!response.ok) {
  //   console.log()
  //   const error = new Error('An error occurred while fetching the events');
  //   toast.error('Enter correct email and Password')
  //   error.code = response.status;
  //   error.info = data
  //   throw error;
  // }else{
  //   toast.success(`Welcome ${data.user.name}`);
  //   navigate('/');
  // }

    }catch(err){
      console.log(err);
    }
   

  }
    return <>
    <Header>
        <Link to="/login" className="button">
          Login
        </Link>
        <Link to="/register" className="button">
          Register
        </Link>
        <Link className="button" onClick={handleSubmit}>
        About
        </Link>
      </Header>
    <Outlet />
    </>
}
export default RootLayout;