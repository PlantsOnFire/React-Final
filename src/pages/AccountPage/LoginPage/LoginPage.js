import './LoginPage.scss';
import login from '../../../assets/loginBoy.png';
import login2 from '../../../assets/loginGirl.png'
import Banner from '../../../components/Banner/Banner';
import { useState } from 'react';
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { loginFirebase } from '../../../auth';

function LoginPage ({handleLogin}) {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [userError, setUserError] = useState([]);
  const [passError, setPassError] = useState([]);
  const [errorMessage, setErrorMessage] = useState(false);
  const [successMessage, setSuccessMessage] = useState(false);
  const [passVis, setPassVis] = useState('password');

  function toggleVisibility () {
    passVis === 'password' ? setPassVis('text') : setPassVis('password');
  };

  function validateForm(event) {
    event.preventDefault();
    const [userErrorTemp, passErrorTemp] = [[], []];
    email === '' && userErrorTemp.push('Email field cannot be left blank.');
    pass === '' && passErrorTemp.push('Password field cannot be left blank.');
    pass.length < 8 && passErrorTemp.push('Password must be 8 characters or longer.')
    setUserError(userErrorTemp);
    setPassError(passErrorTemp);
    if (userErrorTemp.length === 0 && passErrorTemp.length === 0) {
      setErrorMessage(false);
      setSuccessMessage(false);
      console.log('login');
      loginFirebase(email, pass)
        .then((response)=>{
          handleLogin(response.userID);
          setSuccessMessage(response.success);
        })
        .catch((err) => {
          setErrorMessage(err.error);
          console.log(err);
        })
    }
  }

  return (
    <main>
      <Banner title='LOGIN' img={login} img2={login2}/>
      <form onSubmit={validateForm} className='container p-4 form-container'>
        <h2>User Login</h2>
          <div className="form-group m-3">
            <label htmlFor='email' className='col'>Email:</label>
            <input className="form-control" type='text' id='email' placeholder='Email' value={email} maxLength={30} onChange={(e) => setEmail(e.target.value)} autoComplete='email'/>
            {userError.length > 0 &&
              userError.map((item, index) => <div key={index} className="form-text error">{item}</div>)
            }
          </div>
          <div className="form-group m-3">
            <label htmlFor='password' className='col'>Password:</label>
            <input className="form-control" type={passVis} id='password' placeholder='Password' value={pass} maxLength={30} onChange={(e) => setPass(e.target.value)} autoComplete='current-password'/>
            <div onClick={toggleVisibility} id='vis-toggle'>{passVis === 'password' ? <FaEyeSlash /> : <FaEye />}</div>
            {passError.length > 0 &&
              passError.map((item, index) => <div key={index} className="form-text error">{item}</div>)
            }
          </div>
        <button type='submit' className='m-3 button-primary'>Login</button>
        {errorMessage &&
          <div className='text-center mb-4 message-container'>
            <div className='error fs-4'>{errorMessage}</div>
          </div>
        }
        {successMessage &&
          <div className='text-center mb-4 message-container'>
            <div className='success fs-4 mb-3'>{successMessage}</div>
          </div>
        }
      </form>

    </main>
  )
}

export default LoginPage;