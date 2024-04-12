import './Header.scss';
import {Link, NavLink} from 'react-router-dom';
import logo from '../../assets/Logo-Blue-Black.png';
import logoYellow from '../../assets/Logo-Blue-Yellow.png';
import { FaAngleDown } from "react-icons/fa6";

function Header ({userID, userInfo}) {
  return (
    <header>
      <nav className='justify-content-center align-items-center m-0'>

        <div id='top-header' className='row justify-content-center align-items-stretch m-0 p-0'>
          <Link to='/' className='col-sm row align-items-center name-logo p-0 m-0'>
            <img src={logo} id='logo' className='col-sm-3 p-0'/>
            <img src={logoYellow} id='logo-yellow' className='col-sm-3 p-0'/>
            <h1 className='col-sm-6 m-0'>Geo Adventure Kids</h1>
          </Link>
          {userInfo 
            ? <div className='col-lg-auto text-center p-0 m-0 account-link row align-items-center'><Link to='/account'>{userInfo.firstname} {userInfo.lastname}</Link></div>
            : <div className='col-lg-auto text-center p-0 m-0 account-link row align-items-center'><Link to='/account'>Register/Login</Link></div>
          }
        </div>

        <ul id='navlinks' className='row text-center px-3 py-3 m-0 justify-content-center'>
          <li className='col-md nav-item'><NavLink className='nav-link' to='/'>Home</NavLink></li>
          <li className='col-md nav-item'><NavLink className='nav-link' to='/map'>World Map</NavLink></li>
          <li className='col-md nav-item'><NavLink className='nav-link' to='/search'>Country Search</NavLink></li>
          <li className='col-md nav-item'><NavLink className='nav-link' to='/random'>Random Country</NavLink></li>
          <li className='col-md nav-item account-link'><NavLink className='nav-link' to='/account'>Account<FaAngleDown /></NavLink></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;