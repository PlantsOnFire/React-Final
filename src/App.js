import {Routes, Route} from 'react-router-dom';
import axios from 'axios';
import { useEffect } from 'react';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import HomePage from './pages/HomePage/HomePage';
import WorldMapPage from './pages/WorldMapPage/WorldMapPage';
import RandomCountryPage from './pages/RandomCountryPage/RandomCountryPage';
import CountrySearchPage from './pages/CountrySearchPage/CountrySearchPage';
import QuizPage from './pages/QuizPage/QuizPage';
import LoginPage from './pages/LoginPage/LoginPage';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import AccountPage from './pages/AccountPage/AccountPage';
import ContactPage from './pages/ContactPage/ContactPage';
import AboutPage from './pages/AboutPage/AboutPage';

function App() {
  useEffect(()=> {
    axios.get('https://opentdb.com/api.php?amount=10&category=22')
      .then((response) => {
        console.log(response.data);
      })
    axios.get('https://restcountries.com/v3.1/all')
      .then((response)=> {
        console.log(response.data);
      })
  }, [])

  return (
    <div className='d-flex flex-column' id='app-container'>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage/>}/>

        <Route path='/map' element={<WorldMapPage/>}/>
        <Route path='/search' element={<CountrySearchPage/>}/>
        <Route path='/random' element={<RandomCountryPage/>}/>
        <Route path='/register' element={<RegisterPage/>}/>
        <Route path='/login' element={<LoginPage/>}/>        
        <Route path='/account' element={<AccountPage/>}/>
        <Route path='/quiz' element={<QuizPage/>}/>
        <Route path='/about' element={<AboutPage/>}/>
        <Route path='/contact' element={<ContactPage/>}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
