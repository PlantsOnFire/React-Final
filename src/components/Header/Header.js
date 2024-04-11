import './Header.scss';
import {Link, NavLink} from 'react-router-dom';
import logo from '../../assets/Logo-Blue-Black.png';
import { useState } from 'react';
import { FaAngleDown } from "react-icons/fa6";

function Header () {
  const [loggedIn, setLoggedIn] = useState(false);
  return (
    <header>
      <nav className='justify-content-center align-items-center m-0'>
        <Link to='/' id='top-header' className='row justify-content-center align-items-center p-5 m-0'>
          <img src={logo} id='logo' className='col-sm-3 col-lg-2 col-xl-1'/>
          <h1 className='col-sm mb-0'>Geo Adventure Kids</h1>
        </Link>
        <ul id='navlinks' className='row text-center px-3 py-4 m-0 justify-content-center'>
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