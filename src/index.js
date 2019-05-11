import "./firebaseBootloader";
import React from "react";
import ReactDOM from "react-dom";
import StudentSignUpForm from "./forms/StudentSignUpForm";
import SedeSignUpForm from "./forms/SedeSignUpForm";
import SedesLists from "./lists/SedesLists";
import "bootstrap/dist/css/bootstrap.css";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <SedesLists />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
