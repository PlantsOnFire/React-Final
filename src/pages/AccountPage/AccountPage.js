import './AccountPage.scss';
import account from '../../assets/account.png';

function AccountPage () {
  return (
    <main>
      <div className='banner'>
        <img src={account} id='account' className='accountImg'/>
        <h1>USER ACCOUNT</h1>
        <img src={account} id='account2' className='accountImg2'/>
      </div>
    </main>
  )
}

export default AccountPage;