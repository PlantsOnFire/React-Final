import './HomePage.scss';
import Banner from '../../components/Banner/Banner';
import explorer from '../../assets/explorer.png';
import { NavLink } from 'react-router-dom';

function HomePage () {
  return (
    <main>
      <Banner img={explorer} title='WELCOME ADVENTURERS'/>
      <div className='homeText'>
        <h2 className='homeTitle'>Hello Everyone!</h2>
        <p>
          This is the main page of Geo Adventure Kids!<br/>
          Come on in and check out everything we have about our world.<br/>
          This earth is an amazing place and this site will help with some facts.<br/>
          Check out the <NavLink className='homeLinks' to='/map'>World Map</NavLink> and see what countries you know.<br/>
          How about try the <NavLink className='homeLinks' to='/search'>Country Search</NavLink> and search up a spicific countries information.<br/>
          Or even the <NavLink className='homeLinks' to='/random'>Random Country</NavLink> and find out a random countries information.<br/>
          While learning about all the countries remember to Login or Register an account <NavLink className='homeLinks' to='/account'>Here</NavLink><br/>
          As always stay safe and enjoy yourself on the Geo Adventure Kids site.   
        </p>
      </div>
    </main>
  )
}

export default HomePage;