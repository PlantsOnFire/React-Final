import './LoginPage.scss';
import login from '../../assets/loginBoy.png';
import login2 from '../../assets/loginGirl.png'

function LoginPage () {
  return (
    <main>
      <div className='banner'>
        <img src={login} id='login' className='loginImg'/>
        <h1>LOGIN</h1>
        <img src={login2} id='login2' className='loginImg2'/>
      </div>
    </main>
  )
}

export default LoginPage;