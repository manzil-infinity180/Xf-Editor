import {Link, Outlet} from 'react-router-dom';
import Header from '../Header';
function RootLayout(){
    return <>
    <Header>
        <Link to="/login" className="button">
          Login
        </Link>
        <Link to="/register" className="button">
          Register
        </Link>
        <Link className="button">
        About
        </Link>
      </Header>
    <Outlet />
    </>
}
export default RootLayout;