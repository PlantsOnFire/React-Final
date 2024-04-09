import { auth } from "../FirebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";

export function registerFirebase(email, pass) {
  let response = {success: false, error: false};
  return new Promise((resolve, reject)=> {
    createUserWithEmailAndPassword(auth, email, pass)
    .then(()=> {
      response.success = 'Your account has been created!';
      resolve(response);
    })
    .catch(err => {
      response.error = err.message;
      reject(response);
    })    
  })
};