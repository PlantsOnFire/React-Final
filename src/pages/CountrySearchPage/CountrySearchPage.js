import './CountrySearchPage.scss';
import discover from '../../assets/discover.png';
import Banner from '../../components/Banner/Banner';

function CountrySearchPage () {
  return (
    <main>
      <Banner title='COUNTRY SEARCH' img={discover}/>
    </main>
  )
}

export default CountrySearchPage;