import './CountrySearchPage.scss';
import discover from '../../assets/discover.png';
import Banner from '../../components/Banner/Banner';
import SearchForm from '../../components/SearchForm/SearchForm';
import SearchResult from '../../components/SearchResult/SearchResult';
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
        ? <SearchResult displayCountry={displayCountry} setIsSubmit={setIsSubmit}/>
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