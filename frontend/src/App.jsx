// import {Editor } from "./component/Editor";
// import {BrowserRouter} from "react-router-dom"
import { QueryClientProvider } from "@tanstack/react-query"
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
import { queryClient } from "./utils/server";
import {Toaster} from "react-hot-toast";
// import {u}
const router = createBrowserRouter([
{
  path:'/', 
  element:<RootLayout />,
  errorElement :<NotFound />,
  children:[
  { path: '/', element: <HomePage /> },
  
  { path: '/invite' ,element: <Invite />},
  { path: '/create-room' ,element: <CreateRoom />},  
  // {path: '*' ,element: <NotFound />}
]
},
// { path: '/home', element: <HomePage /> },
{ path:'/tinymce-editor',element : <MainEditor />},
  { path:'/quill-editor',element : <Editor/>},
  
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
       <QueryClientProvider client={queryClient}>
       <RouterProvider router={router} />
       <Toaster
        position="top-right"
        reverseOrder={false}
        toastOptions={{
          success: {
            style: {
              backgroundColor: "white",
              color: "green",
              border: "1px solid green",
              padding: "15px",
              marginRight: "20px",
            },
            iconTheme: {
              primary: "green",
              secondary: "white",
            },
          },
          error: {
            style: {
              backgroundColor: "white",
              color: "red",
              border: "1px solid red",
              padding: "15px",
              marginRight: "20px",
            },
            iconTheme: {
              primary: "red",
              secondary: "white",
            },
          },
        }}
      />
       </QueryClientProvider>
    </>
  )
}

export default App
