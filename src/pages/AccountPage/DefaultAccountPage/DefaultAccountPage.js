import './DefaultAccountPage.scss';
import Banner from '../../../components/Banner/Banner';
import account from '../../../assets/account.png';

function DefaultAccountPage () {
  return (
    <div>
      <Banner title='USER ACCOUNT' img={account}/>
    </div>
  )
}

export default DefaultAccountPage;