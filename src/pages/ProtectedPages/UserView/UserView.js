import { Outlet } from "react-router-dom";
import './UserView.scss';
import UserNav from "../../../components/ProtectedComponents/UserNav/UserNav";

function UserView () {
  return(
    <div>User View Protected
      <UserNav/>
      {/* Account Page and Form Page */}
      <Outlet/> 
    </div>
  )
}

export default UserView;