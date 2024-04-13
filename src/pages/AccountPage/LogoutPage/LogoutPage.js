import './LogoutPage.scss';
import bye from '../../../assets/bye.png';
import bye2 from '../../../assets/bye2.png';
import Banner from '../../../components/Banner/Banner';


function LogoutPage ({handleLogout}) {
  return(
    <main>
      <Banner title='LOGOUT' img={bye} img2={bye2}/>
      <div className='container text-center p-3' id='welcome-container'>
        <h1>Do you want to logout?</h1>
        <button className='button-primary' onClick={handleLogout}>Logout</button>
      </div>
    </main>
  )
}

export default LogoutPage;