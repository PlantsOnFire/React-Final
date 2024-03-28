import './Header.scss';
import {Link, NavLink} from 'react-router-dom';
import logo from '../../assets/GeoAdventureKids.png';
import { useState } from 'react';

function Header () {
  const [loggedIn, setLoggedIn] = useState(true);
  return (
    <header>
      <nav className='justify-content-center align-items-center py-3 mb-4 py-4 px-5'>
        <Link to='/' id='top-header' className='row justify-content-center align-items-center pb-3 mb-3'>
          <img src={logo} id='logo' className='col-sm-3 col-lg-2 col-xl-1'/>
          <h1 className='col-sm mb-0'>Geo Adventure Kids</h1>
        </Link>
        <ul id='navlinks' className='row equal-height-row nav text-center fs-5 align-items-end'>
          <li className='col-sm nav-item'><NavLink className='nav-link' to='/'>Home</NavLink></li>
          <li className='col-sm nav-item'><NavLink className='nav-link' to='/map'>World Map</NavLink></li>
          <li className='col-sm nav-item'><NavLink className='nav-link' to='/search'>Country Search</NavLink></li>
          <li className='col-sm nav-item'><NavLink className='nav-link' to='/random'>Random Country</NavLink></li>
          {!loggedIn 
            ? <li className='col-sm nav-item'><NavLink className='nav-link' to='/login'>Login</NavLink></li>
            : <li className='col-sm nav-item'><NavLink className='nav-link' to='/user'>Account</NavLink></li> 
          }
        </ul>
      </nav>
    </header>
  )
}

export default Header;