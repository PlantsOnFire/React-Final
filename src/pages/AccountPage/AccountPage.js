import './AccountPage.scss';
import account from '../../assets/account.png';
import Banner from '../../components/Banner/Banner';

function AccountPage () {
  return (
    <main>
      <Banner title='USER ACCOUNT' img={account}/>
    </main>
  )
}

export default AccountPage;