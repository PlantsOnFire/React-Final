import './DisplayAccountPage.scss';
import account from '../../../assets/account.png';
import Banner from '../../../components/Banner/Banner';
import { useState, useEffect } from 'react';

function DisplayAccountPage ({userID, userEmail, userInfo}) {
  const [firstname, setFirstName] = useState('User');
  const [lastname, setLastName] = useState('');
  const [dob, setDOB] = useState('');
  useEffect(() => {
    if (userInfo) {
      setFirstName(userInfo.firstname);
      setLastName(userInfo.lastname);
      setDOB(userInfo.dob);
    };
  }, [userInfo])  
  return(
    <main>
      <Banner title={'WELCOME '+ firstname.toUpperCase()} img={account}/>
      <div className='container p-4 fs-5' id='welcome-container'>
        <div>
          <h2>Account Information:</h2>
          <div>First Name: {firstname}</div>
          <div>Last Name: {lastname}</div>
          <div>Date of Birth: {dob}</div>
        </div>
      </div>
    </main>
  )
}

export default DisplayAccountPage;