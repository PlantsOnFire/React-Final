import './HomePage.scss';
import explorer from '../../assets/explorer.png';

function HomePage () {
  return (
    <main>
      <div className='banner'>
        <img src={explorer} id='explorer' className='explorerImg'/>
        <h1>WELCOME ADVENTURERS</h1>
        <img src={explorer} id='explorer2' className='explorerImg2'/>
      </div>
    </main>
  )
}

export default HomePage;