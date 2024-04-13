import { setDoc, doc } from "firebase/firestore";
import { db } from "../FirebaseConfig";

//Add Quiz Results to Database
export async function updateFavePlaces (userID, favePlaces) {
  try {
    await setDoc(
      doc(db, 'places-to-travel', userID), 
      {places: favePlaces}, 
      {merge: false}
    );
    console.log('write');
  } catch (e) {
    console.error(e); // handle your error here
  }
}

//For adding User Information
export async function addUserInformation (userID, firstname, lastname, dob) {
  try {
    await setDoc(
      doc(db, 'users', userID), 
      { userinfo: {
        firstname: firstname,
        lastname: lastname,
        dob: dob
      }
      }, 
      {merge: false}
    );
    console.log('write');
    return ('User Information Updated!');
  } catch (e) {
    console.error(e); // handle your error here
    return(e);
  }
}