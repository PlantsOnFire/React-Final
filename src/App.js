//==========Module Imports====================
import {Routes, Route, useNavigate} from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
//===============Firebase Imports=============
import {logoutFirebase, getUserID, getUserEmail} from './auth';
import {getData, getUserInfo,updateQuizResults} from './database';
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
  import AccountUpdatePage from './pages/AccountPage/AccountUpdatePage/AccountUpdatePage';
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
    const [quizResults, setQuizResults] = useState([]);
    const [deletedAllQuizResults, setDeletedAllQuizResults] = useState(false);

  //====================API CALL=========================
    useEffect(()=> {
      axios.get('https://restcountries.com/v3.1/all')
        .then((response)=> {
          console.log(response.data);
          setWorldData(response.data);
        });
    }, [])
    useEffect(()=> {
      let updatedData = [...uniqueContinents];
      // console.log(updatedData);
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
              setQuizResults(res);
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
          setQuizResults([]);
          if (alert('You are now logged out!') === undefined) {
            navigate('/');
          }
        })
        .catch(err=>setLogoutStatus({message: err, status: false}))
    }

  //==========Fix for all quizzes deleted================
  useEffect(() => {
    if (quizResults.length !== 0 || deletedAllQuizResults) {
      updateQuizResults(userID, quizResults);
      setDeletedAllQuizResults(false); 
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [quizResults]);

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
            worldData={worldData}
          />}
        />
        <Route path='/random' element={<RandomCountryPage/>}/>

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
            />}
          />
          <Route path='quiz' element={<QuizPage/>}/>
          <Route path='editUser' element={<AccountUpdatePage/>}/>
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
