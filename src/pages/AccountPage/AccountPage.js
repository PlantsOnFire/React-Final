import './AccountPage.scss';
import AccountNav from '../../components/AccountNav/AccountNav';
import {Outlet} from 'react-router-dom';

function AccountPage () {
  return (
    <>
      <AccountNav/>
      <Outlet/>
    </>
  )
}

export default AccountPage;