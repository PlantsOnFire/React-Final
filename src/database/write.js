import { setDoc, doc } from "firebase/firestore";
import { db } from "../FirebaseConfig";

//Grocery-list Addition
export async function updateQuizResults (userID, quizResults) {
  try {
    await setDoc(
      doc(db, 'quiz-results', userID), 
      {quizResults: quizResults}, 
      {merge: false}
    );
    console.log('write');
  } catch (e) {
    console.error(e); // handle your error here
  }
}

//For adding User Information
export async function addUserInformation (userID, firstname, lastname, dob, gender) {
  try {
    await setDoc(
      doc(db, 'users', userID), 
      { userinfo: {
        firstname: firstname,
        lastname: lastname,
        dob: dob,
        gender: gender
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