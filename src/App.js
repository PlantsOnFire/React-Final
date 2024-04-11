//==========Module Imports====================
import {Routes, Route} from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
//===============Firebase Imports=============
import {loginFirebase, logoutFirebase, registerFirebase, getUserID, getUserEmail} from './auth';
import {getData, getUserInfo,updateQuizResults, addUserInformation} from './database';
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
  import RegisterPage from './pages/AccountPage/RegisterPage/RegisterPage';
  import DisplayAccountPage from './pages/AccountPage/DisplayAccountPage/DisplayAccountPage';
  import QuizPage from './pages/AccountPage/QuizPage/QuizPage';
  import AccountUpdatePage from './pages/AccountPage/AccountUpdatePage/AccountUpdatePage';
import ContactPage from './pages/ContactPage/ContactPage';
import AboutPage from './pages/AboutPage/AboutPage';
import ErrorPage from './pages/ErrorPage/ErrorPage';


function App() {
  //====================API STATES=======================
    const [worldData, setWorldData] = useState([]);
    const [europeCountries, setEuropeCountries] = useState([]);
    const [africaCountries, setAfricaCountries] = useState([]);
    const [nAmericaCountries, setNAmericaCountries] = useState([]);
    const [oceaniaCountries, setOceaniaCountries] = useState([]);
    const [sAmericaCountries, setSAmericaCountries] = useState([]);
    const [asiaCountries, setAsiaCountries] = useState([]);
    const [antarcticaCountries, setAntarcticaCountries] = useState([]);
    const uniqueContinents = ['Europe', 'Africa', 'North America', 'Oceania', 'South America', 'Asia', 'Antarctica'];

  //====================ACCOUNT STATES===================
    const [userID, setUserID] = useState(false);
    const [userEmail, setUserEmail] = useState(false);
    const [addInfo, setAddInfo] = useState(false);
    const [loading, setLoading] = useState(true);
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
      let europeTemp = worldData.filter(item=> item.continents[0] === 'Europe');
      let africaTemp = worldData.filter(item=> item.continents[0] === 'Africa');
      let namericaTemp = worldData.filter(item=> item.continents[0] === 'North America');
      let oceanTemp = worldData.filter(item=> item.continents[0] === 'Oceania');
      let samericaTemp = worldData.filter(item=> item.continents[0] === 'South America');
      let asiaTemp = worldData.filter(item=> item.continents[0] === 'Asia');
      let antTemp = worldData.filter(item=> item.continents[0] === 'Antarctica');
      setEuropeCountries(europeTemp);
      setAfricaCountries(africaTemp);
      setNAmericaCountries(namericaTemp);
      setOceaniaCountries(oceanTemp);
      setSAmericaCountries(samericaTemp);
      setAsiaCountries(asiaTemp);
      setAntarcticaCountries(antTemp);
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
          setLoading(false);
        } else {
          setLoading(false);
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
          alert('You are now logged out!');
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
      <Header />
      <Routes>
        <Route path='/' element={
          <HomePage
            userID={userID}
          />}
        />
        <Route path='/map' element={
          <WorldMapPage
            worldData={worldData}
            europeCountries={europeCountries}
            uniqueContinents={uniqueContinents}
          />}
        />
        <Route path='/search' element={<CountrySearchPage/>}/>
        <Route path='/random' element={<RandomCountryPage/>}/>

        <Route path='/account' element={
          <AccountPage 
            loading={loading}
            userID={userID} 
            userEmail={userEmail}
            userInfo = {userInfo}
            handleLogout = {handleLogout}
            logoutStatus={logoutStatus}
            handleLogin={handleLogin}
            addInfo={addInfo}
            setAddInfo={setAddInfo}
          />}>
          <Route path='' element={<DefaultAccountPage/>}/>
          <Route path='register' element={<RegisterPage/>}/>
          <Route path='login' element={<LoginPage/>}/>
          <Route path='display' element={<DisplayAccountPage/>}/>
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
