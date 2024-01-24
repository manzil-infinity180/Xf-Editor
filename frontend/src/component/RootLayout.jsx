import {Outlet} from 'react-router-dom';
function RootLayout(){
    return <>
    
    <h1>Access to all pages </h1>
    <Outlet />
    </>
}
export default RootLayout;