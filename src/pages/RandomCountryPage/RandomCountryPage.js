import './RandomCountryPage.scss';
import Banner from '../../components/Banner/Banner';
import world from '../../assets/world.png';
import world2 from '../../assets/worldb.png';
import { useState, useEffect } from 'react';
import SearchResult from '../../components/SearchResult/SearchResult';
import { FaDice } from "react-icons/fa6";


function RandomCountryPage ({worldData, handleAddPlace, favePlaces, handleRemovePlace}) {
  const [displayCountry, setDisplayCountry] = useState();
  const [worldIndex, setIndex] = useState();

  useEffect(()=> {
    getRandomCountry();
  }, [])

  function getRandomCountry(){
    let index = Math.floor(Math.random()*250);
    setIndex(index);
    setDisplayCountry(worldData[index]);
  }
  return (
    <main>
      <Banner title='RANDOM COUNTRY' img={world} img2={world2}/>
      <div className='container form-container p-5' id='display-country'>
        <div><button className='button-primary fs-5 mb-5' onClick={getRandomCountry}><FaDice />  Get Another Country</button></div>
        {displayCountry && <SearchResult displayCountry={displayCountry} handleAddPlace={handleAddPlace} worldIndex={worldIndex} favePlaces={favePlaces} handleRemovePlace={handleRemovePlace}/>}
      </div>
    </main>
  )
}

export default RandomCountryPage;