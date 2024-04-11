import './RegisterPage.scss';
import { useState } from 'react';
import {registerFirebase} from '../../../auth';
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import Banner from '../../../components/Banner/Banner';
import adventurer1 from '../../../assets/adventurer1.png';
import adventurer2 from '../../../assets/adventurer2.png';

function RegisterPage () {
  const [email, setEmail] = useState('');
  const [pass1, setPass1] = useState('');
  const [pass2, setPass2] = useState('');
  const [userError, setUserError] = useState([]);
  const [passError1, setPassError1] = useState([]);
  const [passError2, setPassError2] = useState([]);
  const [passVis1, setPassVis1] = useState('password');
  const [passVis2, setPassVis2] = useState('password');
  const [errorMessage, setErrorMessage] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  //=========Password Visibility============
  function toggleVisibility1 () {
    passVis1 === 'password' ? setPassVis1('text') : setPassVis1('password');
  };
  function toggleVisibility2 () {
    passVis2 === 'password' ? setPassVis2('text') : setPassVis2('password');
  };

  //============Validate Form===============
  function validateForm (event) {
    event.preventDefault();

    const [userErrorTemp, pass1ErrorTemp, pass2ErrorTemp] = [[], [], []];
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const regexPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,16}$/;

    email === '' && userErrorTemp.push('Email field cannot be left blank.');
    !email.match(emailRegex) && userErrorTemp.push('Supplied email is not a valid email.');
    pass1 === '' && pass1ErrorTemp.push('Password field cannot be left blank.');
    pass1.length < 8 && pass1ErrorTemp.push('Password must be 8 characters or longer.')
    pass2 === '' && pass2ErrorTemp.push('Password field cannot be left blank.');
    pass1 !== pass2 && pass2ErrorTemp.push('Password does not match supplied password.');
    !pass1.match(regexPass) && pass1ErrorTemp.push('Password must contain at least one number, one uppercase, one lowercase, and one special character and be between 8-16 characters.');

    setUserError(userErrorTemp);
    setPassError1(pass1ErrorTemp);
    setPassError2(pass2ErrorTemp);

    if (userErrorTemp.length === 0 && pass1ErrorTemp.length === 0 && pass2ErrorTemp.length === 0) {
      setErrorMessage(null);
      setSuccessMessage(null);
      console.log('submitted!')
      registerFirebase(email, pass1)
        .then((res) => {
          setSuccessMessage(res.success);
        })
        .catch((err) => {
          setErrorMessage(err.error)
        })
    }
  }

  return(
    <main>
      <Banner title='CREATE AN ACCOUNT' img={adventurer1} img2={adventurer2}/>
      <form onSubmit={validateForm} className='container p-4 form-container'>
        <h2>Register for an Account</h2>
          <div className="form-group m-3">
            <label htmlFor='email' className='col'>Email:</label>
            <input className="form-control" type='text' id='email' placeholder='Email' value={email} maxLength={30} onChange={(e) => setEmail(e.target.value)} autoComplete='email'/>
            {userError.length > 0 &&
              userError.map((item, index) => <div key={index} className="form-text error">{item}</div>)
            }
          </div>
          <div className="form-group m-3">
            <label htmlFor='pass1' className='col'>Password:</label>
            <input className="form-control" type={passVis1} id='pass1' placeholder='Password' value={pass1} maxLength={30} onChange={(e) => setPass1(e.target.value)} autoComplete='new-password'/>
            <div onClick={toggleVisibility1} id='vis-toggle'>{passVis1 === 'password' ? <FaEyeSlash /> : <FaEye />}</div>
            {passError1.length > 0 &&
              passError1.map((item, index) => <div key={index} className="form-text error">{item}</div>)
            }
          </div>
          <div className="form-group m-3">
            <label htmlFor='pass2' className='col'>Re-Type Password:</label>
            <input className="form-control col" type={passVis2} id='pass2' placeholder='Password' value={pass2} maxLength={30} onChange={(e) => setPass2(e.target.value)} autoComplete='off'/>
            <div onClick={toggleVisibility2} id='vis-toggle'>{passVis2 === 'password' ? <FaEyeSlash /> : <FaEye />}</div>
            {passError2.length > 0 &&
              passError2.map((item, index) => <div key={index} className="form-text error">{item}</div>)
            }
          </div>
        <button type='submit' className='m-3 button-primary'>Register</button>
        {errorMessage &&
          <div className='text-center mb-4 message-container'>
            <div className='error fs-4'>Error! {errorMessage}</div>
          </div>
        }
        {successMessage &&
          <div className='text-center mb-4 message-container'>
            <div className='success fs-4'>Success! {successMessage}</div>
          </div>
        }        
      </form>

    </main>
  )
}

export default RegisterPage;