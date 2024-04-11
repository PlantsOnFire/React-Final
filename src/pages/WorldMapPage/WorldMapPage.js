import './WorldMapPage.scss';
import Banner from '../../components/Banner/Banner';
import travel from '../../assets/travel.png';
import {ReactComponent as World} from '../../assets/world.svg';
import { useState} from 'react';

function WorldMapPage ({worldData, europeCountries, uniqueContinents}) {
  

  const [Location, setLocation] = useState(null);
  const [Type, setType] = useState(null);

  const handleClick = (event) =>{
    if (event.target.getAttribute('class') === null){
      setType('name');
    }
    else{
      setType('class');
    }
    setLocation(event.target.getAttribute(Type));
  }

  return (
    <main className='world-page'>
      <Banner img={travel} title='WORLD MAP'/>
      <div className='mapTitle'>Choose a location and it will appear below!</div>
      <div className='row m-0' id='world-map'>
        <div className='mapText'>{Location}</div>
        <World onClick={(event)=> handleClick(event)}/>  
      </div>
      
    </main>
  )
}

export default WorldMapPage;