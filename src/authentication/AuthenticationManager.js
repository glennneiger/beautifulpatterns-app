import firebase from "firebase";

export class AuthenticationManager {
  login(email, password) {
    return firebase.auth().signInWithEmailAndPassword(email, password);
  }

  signup(email, password) {
    return firebase.auth().createUserWithEmailAndPassword(email, password);
  }
}
