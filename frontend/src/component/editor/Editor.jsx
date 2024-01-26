import { useEffect, useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; 
// import {io} from 'socket.io-client'

function Editor(){
    const [editorValue,setEditorValue] = useState("");
  const style = {
    height:"600px",
    margin:"50px 150px",
    align :"center"
  }
//   const [time, setTime] = useState('fetching')  
//   useEffect(()=>{
//     const socket = io('http://localhost:7007')
//     socket.on('connect', ()=>console.log(socket.id))
//     socket.on('connect_error', ()=>{
//       setTimeout(()=>socket.connect(),5000)
//     })
//    socket.on('time', (data)=>{
//     console.log("connected"+data);
//     setTime(data)})
//    socket.on('disconnect',()=>setTime('server disconnected'))
 
//  },[])
    return <>
    <> 
    <div id="main-header-loading">
    
      <div style={{color:"#e30d7c",fontFamily: 'Style Script', fontSize:"1.2rem"}}>
        <h1>Quill Edior</h1>
      </div>

    </div>
    </>
       < ReactQuill
  value={editorValue}
  style={style}
  formats={('align', 'left')}
  onChange={(value) => setEditorValue(value)}
  modules={{
    toolbar: [
      ["bold", "italic", "underline", "strike"], // toggled buttons
      ["blockquote", "code-block"],

      [{ header: 1 }, { header: 2 }], // custom button values
      [{ list: "ordered" }, { list: "bullet" }],
      [{ script: "sub" }, { script: "super" }], // superscript/subscript
      [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
      [{ direction: "rtl" }], // text direction

      [{ size: ["small", false, "large", "huge"] }], // custom dropdown
      [{ header: [1, 2, 3, 4, 5, 6, false] }],

      [{ color: [] }, { background: [] }], // dropdown with defaults from theme
      [{ font: [] }],
      [{ align: [] }],
      ["clean"], // remove formatting button
      ["link", "image"]
    ]
  }}
  theme="snow" />
    </>
}
export default Editor;
