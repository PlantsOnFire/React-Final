import { auth } from "../FirebaseConfig";

export function getUserID () {
  if (auth.currentUser === null) {
    return false
  }
  return auth.currentUser.uid;
}

export function getUserEmail () {
  if (auth.currentUser === null) {
    return false
  }
  return auth.currentUser.email;
}