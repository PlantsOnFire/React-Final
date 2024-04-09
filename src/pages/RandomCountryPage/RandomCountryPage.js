import './RandomCountryPage.scss';
import world from '../../assets/world.png';
import world2 from '../../assets/worldb.png';

function RandomCountryPage () {
  return (
    <main>
      <div className='banner'>
        <img src={world} id='world' className='worldImg'/>
        <h1>RANDOM COUNTRY</h1>
        <img src={world2} id='world2' className='worldImg2'/>
      </div>
    </main>
  )
}

export default RandomCountryPage;