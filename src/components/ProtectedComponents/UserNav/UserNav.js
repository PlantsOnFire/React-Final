import './UserNav.scss';
import {Link, NavLink} from 'react-router-dom';

function UserNav () {
  return(
    <nav>
      <ul id='navlinks' className='row equal-height-row nav text-center fs-5 align-items-end'>
        <li className='col-sm nav-item'><NavLink className='nav-link' to='/user'>Account Home</NavLink></li>
        <li className='col-sm nav-item'><NavLink className='nav-link' to='/user/account'>Account Information</NavLink></li>
        <li className='col-sm nav-item'><NavLink className='nav-link' to='/user/form'>Test Your Knowledge</NavLink></li>
      </ul>
    </nav>
  )
}

export default UserNav;