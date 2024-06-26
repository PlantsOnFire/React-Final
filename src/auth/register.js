import { auth } from "../FirebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";

export function registerFirebase(email, pass) {
  let response = {success: false, error: false};
  return new Promise((resolve, reject)=> {
    createUserWithEmailAndPassword(auth, email, pass)
    .then((res)=> {
      console.log(res);
      response.success = 'Your account has been created!';
      response.uid = res.user.uid;
      resolve(response);
    })
    .catch(err => {
      response.error = err.message;
      reject(response);
    })    
  })
};