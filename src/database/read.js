import { db } from "../FirebaseConfig";
import {doc, getDoc} from 'firebase/firestore';

export async function getData (userID) {
  const docRef = doc(db, 'places-to-travel', userID);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    let dbData = docSnap.data()
    return dbData.places;
  } else {
    throw new Error('No Fave Places.');
  }
}

export async function getUserInfo (userID) {
  const docRef = doc(db, 'users', userID);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    let dbData = docSnap.data()
    return dbData.userinfo;
  } else {
    throw new Error('No user info.');
  }
}