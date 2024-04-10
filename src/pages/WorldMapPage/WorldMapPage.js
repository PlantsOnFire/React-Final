import './WorldMapPage.scss';
import Banner from '../../components/Banner/Banner';
import travel from '../../assets/travel.png';
import {ReactComponent as World} from '../../assets/world.svg';

function WorldMapPage ({worldData, europeCountries, uniqueContinents}) {
  
  return (
    <main className='world-page'>
      <Banner img={travel} title='WORLD MAP'/>
      <div className='row m-0' id='world-map'>
        <World/>
      </div>
    </main>
  )
}

export default WorldMapPage;