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

  getSedes() {
    return this.sedesCollection.get().then(ref => {
      return ref.docs.map(x => {
        return {
          sedeId: x.id,
          data: x.data()
        };
      });
    });
  }

  getUnauthorizedSedes() {
    return this.sedesCollection
      .where("authorized", "==", false)
      .get()
      .then(ref => {
        return ref.docs.map(x => {
          return {
            sedeId: x.id,
            data: x.data()
          };
        });
      });
  }

  updateAuthorized(sedeId) {
    this.sedesCollection
      .doc(sedeId)
      .update({ authorized: true })
      .then(ref => {});
  }
}
