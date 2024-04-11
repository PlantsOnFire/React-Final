import './AboutPage.scss';
import Banner from '../../components/Banner/Banner';

function AboutPage () {
return (
  <main>
    <Banner title='ABOUT GEO ADVENTURE KIDS'/>
    <div className='geoKidsInfo'>
      <h2 className='title'>About Geo Adventure Kids</h2>
      <p className='paragraph'>
        Geo Adventure Kids is an interactive world search.<br/>
        It was created on the request of a great parent looking for a site for their kids.<br/>
        It can be utilized both at home and away to educate you and your kids on the world.<br/>
        It is easy to use and well designed that any child can navigate the site all on their own.<br/>
        Have fun and let us know if you enjoy Geo Adventure Kids.
      </p>
    </div>
    <div className='calCorpInfo'>
      <h2 className='title'>About CAL Corp.</h2>
      <p className='paragraph'>
        CAL corp is made up of a group of Fanshawe College graduates.<br/>
        Our goal is to provide companies with well designed and programmed websited and applications.<br/>
        We are a new company with only personal programs under our belt.<br/> 
        We strive to learn new and inovative tecniques to aid in creating the best products.<br/>
        We create web sites, mobile apps and more. 
      </p>
    </div>
  </main>
)
}

export default AboutPage;