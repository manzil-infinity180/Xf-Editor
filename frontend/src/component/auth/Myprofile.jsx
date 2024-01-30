import { useEffect, useState } from "react";

function Myprofile(){
    const [loading,setLoading] = useState(false);
    const [profile,setProfile] = useState({});
    useEffect(function(){
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