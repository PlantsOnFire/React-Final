import './ErrorPage.scss';
import Banner from '../../components/Banner/Banner';
import { useNavigate } from 'react-router-dom';

function ErrorPage () {
  const navigate = useNavigate();
  return(
    <main>
      <Banner title='404 PAGE NOT FOUND'/>
      <div className='container form-container p-5'>
        <h1>Oh no! This page was moved or never existed! </h1>
        <div>Click on one of the links above or head back over to the home page</div>
        <button className='button-primary m-3' onClick={()=>navigate('/')}>Home</button>
      </div>
    </main>
  )
}

export default ErrorPage;