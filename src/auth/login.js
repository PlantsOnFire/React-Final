import { auth } from "../FirebaseConfig";
import { signInWithEmailAndPassword } from 'firebase/auth';

export const loginFirebase = (email, pass) => {
  let response = {success: false, error: false, userID: false};
  return new Promise((resolve, reject) => {
    signInWithEmailAndPassword(auth, email, pass)
    .then((res)=> {
      response.success = 'You are now logged in!';
      response.userID = res.user.uid;
      resolve(response);
    })
    .catch(err => {
      response.error = err.message;
      reject(response);
    })
  })
}


