import {Routes, Route} from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import HomePage from './pages/HomePage/HomePage';
import LoginPage from './pages/LoginPage/LoginPage';
import UserView from './pages/ProtectedPages/UserView/UserView';
import AccountPage from './pages/ProtectedPages/UserView/AccountPage/AccountPage';
import FormPage from './pages/ProtectedPages/UserView/FormPage/FormPage';
import WorldMapPage from './pages/WorldMapPage/WorldMapPage';
import RandomCountryPage from './pages/RandomCountryPage/RandomCountryPage';
import CountrySearchPage from './pages/CountrySearchPage/CountrySearchPage';
import UserDefaultPage from './pages/ProtectedPages/UserView/UserDefaultPage/UserDefaultPage';

function App() {
  
  return (
    <div className='d-flex flex-column' id='app-container'>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/map' element={<WorldMapPage/>}/>
        <Route path='/search' element={<CountrySearchPage/>}/>
        <Route path='/random' element={<RandomCountryPage/>}/>
        {/* Protected Routes - Logged In*/}
        <Route path='/user' element={<UserView/>}>
          <Route index element={<UserDefaultPage/>}/>
          <Route path='account' element={<AccountPage/>}/>
          <Route path='form' element={<FormPage/>}/>
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
