import './AccountPage.scss';
import AccountNav from '../../components/AccountNav/AccountNav';
import {Outlet} from 'react-router-dom';

function AccountPage () {
  return (
    <main>
      <AccountNav/>
      <Outlet/>
    </main>
  )
}

export default AccountPage;