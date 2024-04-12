import './WorldMapPage.scss';
import Banner from '../../components/Banner/Banner';
import travel from '../../assets/travel.png';
import {ReactComponent as World} from '../../assets/world.svg';
import { useState} from 'react';

function WorldMapPage ({worldData, europeCountries, uniqueContinents}) {
  const [Location, setLocation] = useState(null);

  const handleClick = (event) =>{
    if (event.target.getAttribute('class') === null){
      setLocation(event.target.getAttribute('name'));
    }
    else{
      setLocation(event.target.getAttribute('class'));
    }
  }

  return (
    <main className='world-page'>
      <Banner img={travel} title='WORLD MAP'/>
      <div className='mapTitle p-3'>Choose a location to learn the name!</div>
      <div className='mapText p-3'>{Location}</div>      
      <div className='row mx-0 my-3' id='world-map'>
        <World onClick={(event)=> handleClick(event)}/>
      </div>
      
    </main>
  )
}

export default WorldMapPage;