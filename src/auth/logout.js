import { auth } from "../FirebaseConfig";
import { signOut } from "firebase/auth";

export async function logoutFirebase () {
  return new Promise((resolve, reject) => {
    signOut(auth)
    .then(()=> {resolve('You are now logged out')})
    .catch(err=>reject(err))
  })
};