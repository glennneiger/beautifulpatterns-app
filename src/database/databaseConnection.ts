import firebase from "firebase";

const DatabaseCollections = {
  SEDES: "sedes"
};
export class DatabaseConnection {
  db = firebase.firestore();
  sedesCollection = this.db.collection(DatabaseCollections.SEDES);

  addStudent() {
    const studentId = firebase.auth().currentUser.uid;
    return this.sedesCollection.doc(studentId).set({
      studentId
    });
  }

  addSede(sede) {
    const sedeId = firebase.auth().currentUser.uid;
    return this.sedesCollection.doc(sedeId).set(sede);
  }
}
