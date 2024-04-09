import './Header.scss';
import {Link, NavLink} from 'react-router-dom';
import logo from '../../assets/Logo-Blue-Black.png';
import { useState } from 'react';

function Header () {
  const [loggedIn, setLoggedIn] = useState(false);
  return (
    <header>
      <nav className='justify-content-center align-items-center m-0'>
        <Link to='/' id='top-header' className='row justify-content-center align-items-center p-5 m-0'>
          <img src={logo} id='logo' className='col-sm-3 col-lg-2 col-xl-1'/>
          <h1 className='col-sm mb-0'>Geo Adventure Kids</h1>
        </Link>
        <ul id='navlinks' className='row text-center fs-5 px-3 py-4 m-0 justify-content-center'>
          <li className='col-sm nav-item'>
            <NavLink className='nav-link' to='/'>Home</NavLink>
            </li>
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