//Module Imports
import {Routes, Route} from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
//Firebase Imports
import {} from './auth';
import {getData, getUserInfo,updateQuizResults, addUserInformation} from './database';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import HomePage from './pages/HomePage/HomePage';
import WorldMapPage from './pages/WorldMapPage/WorldMapPage';
import RandomCountryPage from './pages/RandomCountryPage/RandomCountryPage';
import CountrySearchPage from './pages/CountrySearchPage/CountrySearchPage';
import QuizPage from './pages/QuizPage/QuizPage';

import AccountPage from './pages/AccountPage/AccountPage';
  import DefaultAccountPage from './pages/AccountPage/DefaultAccountPage/DefaultAccountPage';  
  import LoginPage from './pages/AccountPage/LoginPage/LoginPage';
  import RegisterPage from './pages/AccountPage/RegisterPage/RegisterPage';
  import DisplayAccountPage from './pages/AccountPage/DisplayAccountPage/DisplayAccountPage';


import ContactPage from './pages/ContactPage/ContactPage';
import AboutPage from './pages/AboutPage/AboutPage';
import ErrorPage from './pages/ErrorPage/ErrorPage';

function App() {
  const [worldData, setWorldData] = useState([]);
  const [europeCountries, setEuropeCountries] = useState([]);
  const [africaCountries, setAfricaCountries] = useState([]);
  const [nAmericaCountries, setNAmericaCountries] = useState([]);
  const [oceaniaCountries, setOceaniaCountries] = useState([]);
  const [sAmericaCountries, setSAmericaCountries] = useState([]);
  const [asiaCountries, setAsiaCountries] = useState([]);
  const [antarcticaCountries, setAntarcticaCountries] = useState([]);
  const uniqueContinents = ['Europe', 'Africa', 'North America', 'Oceania', 'South America', 'Asia', 'Antarctica'];

  useEffect(()=> {
    //First One Doesn't Like Too Many Calls. Don't use Maybe
    // axios.get('https://opentdb.com/api.php?amount=10&category=22')
    //   .then((response) => {
    //     console.log(response.data);
    //   })
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

  return (
    <div className='d-flex flex-column' id='app-container'>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/map' element={
          <WorldMapPage
            worldData={worldData}
            europeCountries={europeCountries}
            uniqueContinents={uniqueContinents}
          />}
        />
        <Route path='/search' element={<CountrySearchPage/>}/>
        <Route path='/random' element={<RandomCountryPage/>}/>

        <Route path='/account' element={<AccountPage/>}>
          <Route path='' element={<DefaultAccountPage/>}/>
          <Route path='register' element={<RegisterPage/>}/>
          <Route path='login' element={<LoginPage/>}/>
          <Route path='display' element={<DisplayAccountPage/>}/>
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
