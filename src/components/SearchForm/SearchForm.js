import './SearchForm.scss';
import { useState } from 'react';

function SearchForm ({uniqueContinents, handleCountrySearch}) {
  const [continentIndex, setContinentIndex] = useState('');
  const [countryIndex, setCountryIndex] = useState(false);
  function onCountrySearch (event) {
    event.preventDefault();
      handleCountrySearch(countryIndex, continentIndex);
  }

  return (
    <>
      <form className='container form-container' id='search-form' onSubmit={onCountrySearch}>
          <h2 className='text-center p-3'>Search By Continent</h2>
          <div className='form-group p-3 row align-items-center'>
            <label htmlFor='search-continent' className='col-auto'>Continent:</label>
            <select id='search-continent' value={continentIndex} onChange={e=>setContinentIndex(e.target.value)} className='form-control col' >
              <option disabled value=''>Select a Continent</option>
              {uniqueContinents &&
                uniqueContinents.map((item, index) => (<option key={index} value={index}>{item.name}</option>))
              }
            </select>
          </div>
          {continentIndex !== '' &&
            <div className='form-group p-3 row align-items-center'>
              <h3>Countries of {uniqueContinents[continentIndex].name}</h3>
              <div className='row'>
                {uniqueContinents[continentIndex].data.map((item, index)=> <button key={index} className='col-auto country-option button-secondary p-1 m-1' type='submit' onClick={()=>{setCountryIndex(index)}}>{item.name.common}</button>)}
              </div>
            </div>
          }
        </form>    
    </>
  )
}

export default SearchForm;