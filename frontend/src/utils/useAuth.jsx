import {useContext,useState,useEffect, createContext} from "react";
import {useNavigate} from "react-router-dom";
const AuthContext = createContext();
import toast from "react-hot-toast";
function AuthProvider({children}){
    // const navigate = useNavigate();
    
      async function LoginFetch(post,navigate){
        try{
            console.log({"data":post});
            let url = 'http://localhost:7007/api/v1/login';
        const response = await fetch(url,{
          method : "post",
          body: JSON.stringify(post),
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




    return (
        <AuthContext.Provider value={{
            LoginFetch
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