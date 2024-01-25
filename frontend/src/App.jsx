// import {Editor } from "./component/Editor";
// import {BrowserRouter} from "react-router-dom"
import  Editor from "./component/editor/Editor";
import HomePage from "./component/HomePage";
import  MainEditor from "./component/editor/MainEditor";
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import NotFound from "./component/NotFound";
import Login from "./component/auth/Login";
import ForgotPassword from "./component/auth/ForgotPassword";
import Register from "./component/auth/Register";
import Invite from "./component/EditorRoom/Invite";
import CreateRoom from "./component/EditorRoom/CreateRoom";
import RootLayout from "./component/RootLayout";

const router = createBrowserRouter([
{
  path:'/', 
  element:<RootLayout />,
  errorElement :<NotFound />,
  children:[
  { path: '/', element: <HomePage /> },
  { path:'/tinymce-editor',element : <MainEditor />},
  { path:'/quill-editor',element : <Editor/>},
  
  { path: '/invite' ,element: <Invite />},
  { path: '/create-room' ,element: <CreateRoom />},  
  // {path: '*' ,element: <NotFound />}
]
},
  { path: '/login' ,element: <Login />},
  { path: '/register' ,element: <Register />},
  { path: '/forgot-password' ,element: <ForgotPassword />},

]);
function App() {
  
  return (
    <>
      {/* <Editor />
       */}
       {/* <MainEditor /> */}
       <RouterProvider router={router} />
    </>
  )
}

export default App
