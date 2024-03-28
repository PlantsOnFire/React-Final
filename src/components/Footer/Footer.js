import './Footer.scss';
import {Link} from 'react-router-dom';
import {ReactComponent as CALCorp} from '../../assets/CALCorp.svg';

function Footer () {
  return(
    <footer className='d-flex flex-wrap justify-content-center py-3 border-bottom align-items-center px-5'>
      <CALCorp id='cal-corp-logo'/>
      <ul className='nav' id='footer-nav'>
        <li className='nav-item '><Link to='/' className='nav-link'>Home</Link></li>
        <li className='nav-item'><Link to='/map' className='nav-link'>World Map</Link></li>
        <li className='nav-item'><Link to='/search' className='nav-link'>Country Search</Link></li>
        <li className='nav-item'><Link to='/random' className='nav-link'>Random Country</Link></li>
      </ul>
    </footer>
  )
}

export default Footer;