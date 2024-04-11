import './AccountNav.scss';
import { NavLink } from 'react-router-dom';

function AccountNav () {
  return(
    <div className='row m-0 justify-content-center text-center' id='account-nav'>
      <div className='col p-0'><NavLink to='/account' end className='nav-link p-3'>Account Home</NavLink></div>
      <div className='col p-0'><NavLink to='/account/login' className='nav-link p-3'>Login</NavLink></div>
      <div className='col p-0'><NavLink to='/account/register' className='nav-link p-3'>Register</NavLink></div>
    </div>
  )
}

export default AccountNav;