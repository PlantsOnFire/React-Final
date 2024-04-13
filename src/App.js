//==========Module Imports====================
import {Routes, Route, useNavigate} from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
//===============Firebase Imports=============
import {logoutFirebase, getUserID, getUserEmail} from './auth';
import {getData, getUserInfo, updateFavePlaces} from './database';
//=============Page Imports===================
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import HomePage from './pages/HomePage/HomePage';
  import WorldMapPage from './pages/WorldMapPage/WorldMapPage';
  import RandomCountryPage from './pages/RandomCountryPage/RandomCountryPage';
  import CountrySearchPage from './pages/CountrySearchPage/CountrySearchPage';

import AccountPage from './pages/AccountPage/AccountPage';
  import DefaultAccountPage from './pages/AccountPage/DefaultAccountPage/DefaultAccountPage';  
  import LoginPage from './pages/AccountPage/LoginPage/LoginPage';
  import LogoutPage from './pages/AccountPage/LogoutPage/LogoutPage';
  import RegisterPage from './pages/AccountPage/RegisterPage/RegisterPage';
  import DisplayAccountPage from './pages/AccountPage/DisplayAccountPage/DisplayAccountPage';
  import QuizPage from './pages/AccountPage/QuizPage/QuizPage';
import ContactPage from './pages/ContactPage/ContactPage';
import AboutPage from './pages/AboutPage/AboutPage';
import ErrorPage from './pages/ErrorPage/ErrorPage';


function App() {
  const navigate = useNavigate();
  //====================API STATES=======================
    const [worldData, setWorldData] = useState([]);
    const [uniqueContinents, setUniqueContinents] = useState([
      {name: 'Europe', data: []}, 
      {name: 'Africa', data: []}, 
      {name: 'North America', data: []}, 
      {name: 'Oceania', data: []}, 
      {name: 'South America', data: []}, 
      {name: 'Asia', data: []}, 
      {name: 'Antarctica', data: []}
    ]);

  //====================ACCOUNT STATES===================
    const [userID, setUserID] = useState(false);
    const [userEmail, setUserEmail] = useState(false);
    const [addInfo, setAddInfo] = useState(false);
    const [userInfo, setUserInfo] = useState(false);
    const [logoutStatus, setLogoutStatus] = useState('');
    const [favePlaces, setFavePlaces] = useState([]);
    const [deletedAllfavePlaces, setDeletedAllfavePlaces] = useState(false);

  //====================API CALL=========================
    useEffect(()=> {
      axios.get('https://restcountries.com/v3.1/all')
        .then((response)=> {
          setWorldData(response.data);
        });
    }, [])
    useEffect(()=> {
      let updatedData = [...uniqueContinents];
      updatedData[0].data = worldData.filter(item=> item.continents[0] === 'Europe');
      updatedData[1].data = worldData.filter(item=> item.continents[0] === 'Africa');
      updatedData[2].data = worldData.filter(item=> item.continents[0] === 'North America');
      updatedData[3].data = worldData.filter(item=> item.continents[0] === 'Oceania');
      updatedData[4].data = worldData.filter(item=> item.continents[0] === 'South America');
      updatedData[5].data = worldData.filter(item=> item.continents[0] === 'Asia');
      updatedData[6].data = worldData.filter(item=> item.continents[0] === 'Antarctica');
      setUniqueContinents(updatedData);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [worldData])
  
  //====================ACCOUNT FUNCTIONS================
    //If Logged in Get Database Data
    useEffect(()=> {
      setTimeout(()=> {
        setUserID(getUserID());
        setUserEmail(getUserEmail());
        if (userID) {
          getData(userID)
            .then(res=>{
              setFavePlaces(res);
            })
            .catch(err=>{
              console.log(err);
            });
          getUserInfo(userID)
            .then(res=>{
              setUserInfo(res);
            })
            .catch(err=>{
              console.log(err);
            });
        }
      }, 300) //Gives it time to get the auth.currentUser.uid and email.
    }, [userID, addInfo]);

    //Login Account
    function handleLogin (uid) {
      setUserID(uid);
    };

    //Logout Account
    function handleLogout () {
      logoutFirebase()
        .then(res=>{
          setLogoutStatus({message: res, status: true});
          setUserID(false);
          setUserEmail(false);
          setUserInfo(false);
          setFavePlaces([]);
          if (alert('You are now logged out! See you later!') === undefined) {
            navigate('/');
          }
        })
        .catch(err=>setLogoutStatus({message: err, status: false}))
    }

  //==========Fix for all places deleted================
  useEffect(() => {
    if (favePlaces.length !== 0 || deletedAllfavePlaces) {
      updateFavePlaces(userID, favePlaces);
      setDeletedAllfavePlaces(false); 
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [favePlaces]);

  function handleRemovePlace (index) {
    const updatedPlaces = favePlaces.filter(place => place.index !== index);
    setFavePlaces(updatedPlaces);
    setDeletedAllfavePlaces(true);
  }

  function handleAddPlace (name, index) {
    const updatedPlaces = [...favePlaces];
    updatedPlaces.push({name: name, index: index});
    setFavePlaces(updatedPlaces);
  }
  return (
    <div className='d-flex flex-column' id='app-container'>
      <Header userID={userID} userInfo={userInfo}/>
      <Routes>
        <Route path='/' element={
          <HomePage
            userID={userID}
          />}
        />
        <Route path='/map' element={<WorldMapPage/>}/>
        <Route path='/search' element={
          <CountrySearchPage
            uniqueContinents={uniqueContinents}
            handleAddPlace={handleAddPlace}
            worldData={worldData}
            favePlaces={favePlaces}
            handleRemovePlace={handleRemovePlace}
          />}
        />
        <Route path='/random' element={<RandomCountryPage worldData={worldData} handleAddPlace={handleAddPlace} handleRemovePlace={handleRemovePlace} favePlaces={favePlaces}/>}/>

        <Route path='/account' element={
          <AccountPage 
            userID={userID} 
            userEmail={userEmail}
            userInfo = {userInfo}
            handleLogout = {handleLogout}
            logoutStatus={logoutStatus}
            handleLogin={handleLogin}
            addInfo={addInfo}
            setAddInfo={setAddInfo}
          />}>
          <Route path='' element={<DefaultAccountPage userID={userID}/>}/>
          <Route path='register' element={<RegisterPage handleLogin={handleLogin}/>}/>
          <Route path='login' element={<LoginPage handleLogin={handleLogin}/>}/>
          <Route path='logout' element={<LogoutPage handleLogout={handleLogout}/>}/>
          <Route path='display' element={
            <DisplayAccountPage
              userID={userID} 
              userEmail={userEmail}
              userInfo = {userInfo}
              favePlaces={favePlaces}
              handleRemovePlace={handleRemovePlace}
            />}
          />
          <Route path='quiz' element={<QuizPage/>}/>
        </Route>



        <Route path='/quiz' element={<QuizPage/>}/>

        <Route path='/about' element={<AboutPage/>}/>
        <Route path='/contact' element={<ContactPage/>}/>
        <Route path='*' element={<ErrorPage/>}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
