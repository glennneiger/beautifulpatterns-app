import firebase from "firebase";

const DatabaseCollections = {
  SEDES: "sedes",
  STUDENTS: "estudiantes"
};

export class DatabaseConnection {
  db = firebase.firestore();
  sedesCollection = this.db.collection(DatabaseCollections.SEDES);
  studentsCollection = this.db.collection(DatabaseCollections.STUDENTS);

  addStudent() {
    const studentId = firebase.auth().currentUser.uid;
    return this.studentsCollection.doc(studentId).set({
      studentId
    });
  }

  addSede(sede) {
    const sedeId = firebase.auth().currentUser.uid;
    return this.sedesCollection.doc(sedeId).set(sede);
  }
}
