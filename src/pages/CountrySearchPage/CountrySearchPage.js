import './CountrySearchPage.scss';
import discover from '../../assets/discover.png';
import Banner from '../../components/Banner/Banner';
import SearchForm from '../../components/SearchForm/SearchForm';
import SearchResult from '../../components/SearchResult/SearchResult';
import { FaMagnifyingGlass } from "react-icons/fa6";
import { useState } from 'react';

function CountrySearchPage ({uniqueContinents, worldData}) {
  const [isSubmit, setIsSubmit] = useState(false)
  const [displayCountry, setDisplayCountry] = useState(false);

  //If they click on a country button - display that countrie's data
  function handleCountrySearch (countryIndex, continentIndex) {
    setIsSubmit(true);
    setDisplayCountry(uniqueContinents[continentIndex].data[countryIndex]);
  }
  return (
    <main id='country-search-page'>
      <Banner title='COUNTRY SEARCH' img={discover}/>
      {isSubmit
        ? <div className='container form-container p-5' id='display-country'>
            <div><button className='button-primary fs-5 mb-5' onClick={()=>{setIsSubmit(false);}}><FaMagnifyingGlass />  Search Again</button></div>        
            <SearchResult displayCountry={displayCountry} setIsSubmit={setIsSubmit}/>
          </div>
        : <SearchForm 
            uniqueContinents  ={uniqueContinents}
            worldData={worldData}
            handleCountrySearch={handleCountrySearch}
          />
      }
    </main>
  )
}

export default CountrySearchPage;