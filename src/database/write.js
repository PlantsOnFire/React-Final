import { setDoc, doc } from "firebase/firestore";
import { db } from "../FirebaseConfig";

//Grocery-list Addition
export async function updateTasksDB (userID, tasks) {
  try {
    await setDoc(
      doc(db, 'grocery-list', userID), 
      {tasks: tasks}, 
      {merge: false}
    );
    console.log('write');
  } catch (e) {
    console.error(e); // handle your error here
  }
}
//Pantry Addition
export async function updatePantry (userID, pantry) {
  try {
    await setDoc(
      doc(db, 'pantry', userID), 
      {pantry: pantry}, 
      {merge: false}
    );
    console.log('write');
  } catch (e) {
    console.error(e); // handle your error here
  }
}

//For adding User Information
export async function addUserInformation (userID, firstname, lastname, age, gender) {
  try {
    await setDoc(
      doc(db, 'users', userID), 
      { userinfo: {
        firstname: firstname,
        lastname: lastname,
        age: age,
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