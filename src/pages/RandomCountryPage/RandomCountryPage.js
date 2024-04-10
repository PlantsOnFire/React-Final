import './RandomCountryPage.scss';
import Banner from '../../components/Banner/Banner';
import world from '../../assets/world.png';
import world2 from '../../assets/worldb.png';

function RandomCountryPage () {
  return (
    <main>
      <Banner title='RANDOM COUNTRY' img={world} img2={world2}/>
    </main>
  )
}

export default RandomCountryPage;