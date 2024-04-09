import { db } from "../FirebaseConfig";
import {doc, getDoc} from 'firebase/firestore';

export async function getData (userID) {
  const docRef = doc(db, 'grocery-list', userID);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    let dbData = docSnap.data()
    return dbData.tasks;
  } else {
    throw new Error('No tasks.');
  }
}
export async function getPantryData (userID) {
  const docRef = doc(db, 'pantry', userID);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    let dbData = docSnap.data()
    return dbData.pantry;
  } else {
    throw new Error('No tasks.');
  }
}

export async function getUserInfo (userID) {
  const docRef = doc(db, 'users', userID);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    let dbData = docSnap.data()
    return dbData.userinfo;
  } else {
    throw new Error('No tasks.');
  }
}