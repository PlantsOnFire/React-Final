import './WorldMapPage.scss';
import travel from '../../assets/travel.png';

function WorldMapPage () {
  return (
    <main>
      <div className='banner'>
        <img src={travel} id='travel' className='travelImg'/>
        <h1>WORLD MAP</h1>
        <img src={travel} id='travel2' className='travelImg2'/>
      </div>
    </main>
  )
}

export default WorldMapPage;