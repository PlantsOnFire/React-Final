import './DefaultAccountPage.scss';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Banner from '../../../components/Banner/Banner';
import account from '../../../assets/account.png';

function DefaultAccountPage ({userID}) {
  const navigate = useNavigate();
  useEffect(()=> {
    userID && navigate('/account/display')
  }, [])
  return (
    <main>
      <Banner title='WELCOME' img={account}/>
      <div className='container p-4 fs-5' id='welcome-container'>
        <h1>Welcome Geo Adventurer!</h1>
        <div>Are you ready for an incredible journey of exploration around the world!?</div>
        <div>You're in luck! Geo Adventure Kids is a fun place to explore all the countries of the world and test your knowledge!</div>
        <div>Now remember! You must be <strong>16 or older</strong> to make an account, so make sure your parent is present when you sign up!</div>
        <button className='button-primary m-3' onClick={()=>navigate('/account/register')}>Sign Up</button>
        <button className='button-primary m-3' onClick={()=>navigate('/account/login')}>Login</button>
      </div>

    </main>
  )
}

export default DefaultAccountPage;