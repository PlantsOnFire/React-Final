import './CountrySearchPage.scss';
import discover from '../../assets/discover.png';

function CountrySearchPage () {
  return (
    <main>
      <div className='banner'>
        <img src={discover} id='discover' className='discoverImg'/>
        <h1>COUNTRY SEARCH</h1>
        <img src={discover} id='discover2' className='discoverImg2'/>
      </div>
    </main>
  )
}

export default CountrySearchPage;