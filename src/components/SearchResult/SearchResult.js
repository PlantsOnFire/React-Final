import { useState, useEffect } from 'react';
import './SearchResult.scss';
import { FaHeart, FaHeartCircleCheck } from "react-icons/fa6";

function SearchResult ({displayCountry, handleAddPlace, worldIndex, favePlaces, handleRemovePlace}) {
  const [population, setPopulation] = useState(displayCountry.population);
  const [time, setTime] = useState(new Date(Date.now()).toLocaleString());
  const [displayTime, setDisplayTime] = useState([]);
  const [isFav, setIsFave] = useState(false);
  
  //Get Local Times
  useEffect(()=> {
    let countryTime = [];
    const d = new Date();
    const localTime = d.getTime();
    const localOffset = d.getTimezoneOffset() * 60000;
    const utc = localTime + localOffset;    
    displayCountry.timezones.forEach(item => {
      countryTime.push(new Date(utc + (3600000 * (parseInt(item.substr(3,3))))).toLocaleString());
    });
    setDisplayTime(countryTime);
  }, [displayCountry])

  //Check for Fave Place
  useEffect(() =>{
    if (favePlaces.findIndex((item)=> item.index === worldIndex) !== -1) {
      setIsFave(true);
    } else {
      setIsFave(false);
    }
  }, [favePlaces, displayCountry])
  //Add Place to Favourites
  function addToFavourites () {
    isFav ? handleRemovePlace(worldIndex) : handleAddPlace(displayCountry.name.common, worldIndex);
  }
  return (
    <>
    <div className='row m-0'>
      <h1 className='mb-0 p-3 col'>{displayCountry.name.common}</h1>
      <button onClick={addToFavourites} className={isFav ? 'fav col-auto button-secondary' : 'un-fav col-auto button-secondary'} id='favourite-button'>Want to Travel  {isFav ? <FaHeartCircleCheck/> : <FaHeart />}</button>
    </div>
      <div id='result-container' className='fs-5 p-4'>
        <div className='row mb-3'>
          <div className='col-md-6'>
            <div>Continent: <span className='result-data'>{displayCountry.continents && displayCountry.continents[0]}</span></div>
            <div>Sub-Region: <span className='result-data'>{displayCountry.subregion}</span></div>
            <div>Capital: <span className='result-data'>{displayCountry.capital && displayCountry.capital[0]}</span></div>
            <div>People From This Country Are Called: <span className='result-data'>{displayCountry.demonyms.eng.m}</span></div>
            <div>Language(s) Spoken: </div>
              <ul className='result-data mb-0'>
                {displayCountry.languages &&
                  Object.values(displayCountry.languages).map((item, index)=><li key={index}>{item}</li>)
                }
              </ul>
            <div>Population: <span className='result-data'>{population.toLocaleString()}</span></div>
          </div>
          <div className='col-md-6'>
            <div>Your Current Date and Time: <span className='result-data'>{time}</span></div>
            <div>{displayCountry.name.common}'s' Date and Time:
              <ul className='result-data'>
                {displayCountry.timezones &&
                  displayCountry.timezones.map((item, index)=><li key={index}>{item}&emsp;{displayTime[index]}</li>)
                }
              </ul>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-6'>Their Flag:</div>
          <div className='col-md-6 order-md-1 img-container'><img src={displayCountry.flags.png} alt={displayCountry.flags.alt}/></div>
          <div className='col-md-6'>Their Coat Of Arms:</div>
          <div className='col-md-6 order-md-2 img-container'><img src={displayCountry.coatOfArms.png} alt={displayCountry.coatOfArms.alt}/></div>
        </div>
      </div>
    </>
  )
}
export default SearchResult;