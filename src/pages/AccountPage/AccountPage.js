import './AccountPage.scss';
import AccountNav from '../../components/AccountNav/AccountNav';
import {Outlet} from 'react-router-dom';

function AccountPage ({userID}) {
  return (
    <>
      <AccountNav userID={userID}/>
      <Outlet/>
    </>
  )
}

export default AccountPage;