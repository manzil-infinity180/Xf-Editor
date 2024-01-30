import { useEffect, useState } from "react";
import { useAuth } from "../../utils/useAuth";

function Myprofile(){
    // const [loading,setLoading] = useState(false);
    // const [profile,setProfile] = useState({});
    const {profile,loading,MyselfFetch} = useAuth();
    useEffect(function(){
        MyselfFetch();
    },[])
   
    // function handleFetch(){
    //   setLoading(true);
    //    MyselfFetch();
    // }
    return(
        <div>
            <h1>Myprofile</h1>
            {loading===false && <h2>Loading....</h2>}
            {/* <button type="submit">Click Me</button> */}
            {
                loading &&(
                    <div>
                     <h3>Name: {profile.name}</h3>
                     <h3>Username: {profile.username}</h3>
                     <h3>EmailId: {profile.email}</h3>
                     
                        </div>
                )
            }
        </div>
    )
}
export default Myprofile;