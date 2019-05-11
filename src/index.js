import "./firebaseBootloader";
import React from "react";
import ReactDOM from "react-dom";
import StudentSignUpForm from "./forms/StudentSignUpForm";
import SedeSignUpForm from "./forms/SedeSignUpForm";
import UnauthorizedSedesList from "./lists/UnauthorizedSedesList";
import AuthorizedSedesList from "./lists/AuthorizedSedesList";
import SedesList from "./lists/SedesList";
import LogInForm from "./forms/LogInForm";
import { Switch, Route, Router, BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <AuthorizedSedesList />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
