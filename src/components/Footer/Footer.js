import './Footer.scss';
import {Link} from 'react-router-dom';

function Footer () {
  return(
    <footer className='d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom align-items-center mx-5'>
      <svg className='d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none'>Company Logo Goes Here</svg>
      <ul className='nav'>
        <li className='nav-item'><Link to='/' className='nav-link'>Home</Link></li>
        <li className='nav-item'><Link to='/map' className='nav-link'>World Map</Link></li>
        <li className='nav-item'><Link to='/search' className='nav-link'>Country Search</Link></li>
        <li className='nav-item'><Link to='/random' className='nav-link'>Random Country</Link></li>
      </ul>
    </footer>
  )
}

export default Footer;