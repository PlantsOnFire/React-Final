import './HomePage.scss';
import Banner from '../../components/Banner/Banner';
import explorer from '../../assets/explorer.png';

function HomePage () {
  return (
    <main>
      <Banner img={explorer} title='WELCOME ADVENTURERS'/>
    </main>
  )
}

export default HomePage;