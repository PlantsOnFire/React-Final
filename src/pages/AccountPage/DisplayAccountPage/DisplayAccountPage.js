import './DisplayAccountPage.scss';
import account from '../../../assets/account.png';
import Banner from '../../../components/Banner/Banner';
import { useState, useEffect } from 'react';

function DisplayAccountPage ({userID, userEmail, userInfo, favePlaces, handleRemovePlace}) {
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
        <div>
          <h2>Favourite Places:</h2>
          {favePlaces.length > 0 
            ? 
              <div className='px-5 align-items-center' id='fav-container'>
                {favePlaces.map((item, index)=><div key={index} className='row align-items-center'><span className='col mb-2'>{item.name}</span><button onClick={()=>handleRemovePlace(item.index)} className='col-auto button-error fs-5 p-2 mb-2'>Remove</button><hr/></div>)}
              </div>
            : <div>You don't have any favourite places... yet!</div>
          }
        </div>
      </div>
    </main>
  )
}

export default DisplayAccountPage;