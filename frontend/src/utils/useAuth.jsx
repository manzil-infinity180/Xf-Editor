import {useContext,useState,useEffect, createContext} from "react";
const AuthContext = createContext();
import toast from "react-hot-toast";
function AuthProvider({children}){
    // const navigate = useNavigate();
      const [loading,setLoading] = useState(false);
      const [profile,setProfile] = useState({});
      async function LoginFetch(post,navigate){
        try{
            console.log({"data":post});
            let url = 'http://localhost:7007/api/v1/login';
        const response = await fetch(url,{
          method : "post",
          body: JSON.stringify(post),
          credentials:"include",
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

      async function RegisterFetch(post,navigate){
        try{
            let url = 'http://localhost:7007/api/v1/register';
        const response = await fetch(url,{
          method : "post",
          credentials:"include",
          body: JSON.stringify(post),
          headers : {
            'Content-type':'application/json'
          }
        });
        const {data} = await response.json();
        console.log(data);
        // const {name} = data;
        // console.log(name)
        
        if (!response.ok) {
          const error = new Error('An error occurred while fetching the events');
          toast.error('Account already existed');
          // toast.error(data.err);
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
      async function MyselfFetch(){
        try{
            let url = 'http://localhost:7007/api/v1/profile';
            const res = await fetch(url,{
                credentials:"include"
            });
            const {data} = await res.json();
            setLoading(true);
        //    const {name,email,username} = data.user;
        //    console.log(data);
           setProfile(data.user);
        //    console.log({profile})
        //    console.log({;
        //     name,
        //     email,
        //     username
        //    })
        }catch(err){
            console.log(err);
        }
    }
    async function ForgotPasswordFetch(post){
      try{
          let url = 'http://localhost:7007/api/v1/forgot-password';
      const response = await fetch(url,{
        method : "post",
        credentials:"include",
        body: JSON.stringify({email:post}),
        headers : {
          'Content-type':'application/json'
        }
      });
      const {data} = await response.json();
      console.log(data);
      // const {name} = data;
      // console.log(name)
      
      if (!response.ok) {
        const error = new Error('An error occurred while fetching the events');
        toast.error('No user exist with these email id , please register yourself first');
        // toast.error(data.err);
        error.code = response.status;
        error.info = data
        throw error;
      }else{
        toast.success(`Please check your mail and paste the link into the browser`);
    
        // navigate('/reset-password');
      }
    
        }catch(err){
          console.log(err);
        }
    }
    async function ResetPasswordFetch(post,token){
      try{
          let url = `http://localhost:7007/api/v1/reset-password/:${token}`;
      const response = await fetch(url,{
        method : "patch",
        credentials:"include",
        body: JSON.stringify({password: post}),
        headers : {
          'Content-type':'application/json'
        }
      });
      const {data} = await response.json();
      console.log(data);
      // const {name} = data;
      // console.log(name)
      
      if (!response.ok) {
        const error = new Error('An error occurred while fetching the events');
        toast.error('No user exist with these email id , please register yourself first');
        // toast.error(data.err);
        error.code = response.status;
        error.info = data
        throw error;
      }else{
        toast.success(`Welcome ${data.user.name}`);
    
        // navigate('/reset-password');
      }
    
        }catch(err){
          console.log(err);
        }
    }




    return (
        <AuthContext.Provider value={{
            LoginFetch,
            RegisterFetch,
            MyselfFetch,
            ForgotPasswordFetch,
            ResetPasswordFetch,
            loading,
            profile
        }}>
            {children}
        </AuthContext.Provider>
    )
}
function useAuth(){
    const contextValue = useContext(AuthContext);
    if(contextValue===undefined){
     throw new Error("CityContext is used outside the cityprovider");
    }
    return contextValue;
}

export {useAuth,AuthProvider};