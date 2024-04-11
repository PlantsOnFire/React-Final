import './LoginPage.scss';
import login from '../../../assets/loginBoy.png';
import login2 from '../../../assets/loginGirl.png'
import Banner from '../../../components/Banner/Banner';

function LoginPage () {
  return (
    <main>
      <Banner title='LOGIN' img={login} img2={login2}/>
    </main>
  )
}

export default LoginPage;