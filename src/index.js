import "./firebaseBootloader";
import React from "react";
import ReactDOM from "react-dom";
import StudentSignUpForm from "./forms/StudentSignUpForm";
import SedeSignUpForm from "./forms/SedeSignUpForm";
import "bootstrap/dist/css/bootstrap.css";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <StudentSignUpForm />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
