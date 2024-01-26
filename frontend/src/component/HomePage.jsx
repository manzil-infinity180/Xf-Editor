import { useEffect, useState } from "react";
import {Link} from "react-router-dom"
// import {io} from 'socket.io-client'
const meetupImg = "https://images.unsplash.com/photo-1513530534585-c7b1394c6d51?q=80&w=2971&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
 function HomePage(){
    const [editor,setEditor] = useState(false);
    const [value,setValue] = useState([]);
    useEffect(()=>{
      async function fetchData(){

        const res = await fetch("http://localhost:7007");
        const data = await res.json();
        console.log(JSON.parse(data));
        // const data = await res.json();
        // // setValue(data);
        // console.log({data})
      }
      fetchData();
    },[]);
    // const [time, setTime] = useState('fetching')  
//   useEffect(()=>{
//     const socket = io('http://localhost:7007')
//     socket.on('connect', ()=>console.log(socket.id))
//     socket.on('connect_error', ()=>{
//       setTimeout(()=>socket.connect(),5000)
//     })
//    socket.on('time', (data)=>setTime(data))
//    socket.on('disconnect',()=>setTime('server disconnected'))
 
//  },[])

    return <>
    <section
      className="content-section"
      id="overview-section"
      style={{ backgroundImage: `url(${meetupImg})`,backgroundSize:"cover",backgroundPosition:"left"}}
    >
      <h2>
        Connect with amazing people <br />
        or <strong>find a new passion</strong>
      </h2>
      <p>Anyone can collobrate and join other editor on Xf Editor</p>
      {editor===false && <p>
        <button className="button" style={{textDecoration:"none"}} onClick={()=>setEditor(true)}>
          Create your first document
        </button>
        
      </p>}
      {editor && <p>Choose One of the Editor 🦾</p>}
     {editor && <p>
        
      <Link to="/tinymce-editor" className="button">
          TinyMce Editor
        </Link>
        <Link to="/quill-editor" className="button">
          Quill Editor
        </Link>
      </p>}
    </section>
    {/* <h1>
      {value}
     
    </h1> */}
    </>
}
export default HomePage;