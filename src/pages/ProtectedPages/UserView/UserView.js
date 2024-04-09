import { Outlet } from "react-router-dom";
import './UserView.scss';
import UserNav from "../../../components/UserNav/UserNav";
import account from '../../../assets/account.png';

function UserView () {
  return(
    <main>
      <div className='banner'>
        <img src={account} id='account' className='accountImg'/>
        <h1>USER ACCOUNT</h1>
        <img src={account} id='account2' className='accountImg2'/>
      </div>
      <UserNav/>
      {/* Account Page and Form Page */}
      <Outlet/> 
    </main>
  )
}

export default UserView;