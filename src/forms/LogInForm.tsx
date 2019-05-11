import React, { Component, useState } from "react";
import { DatabaseConnection } from "../database/databaseConnection";
import { Form, Button, Col } from "react-bootstrap";
import { AuthenticationManager } from "../authentication/AuthenticationManager";
import AuthorizedSedesList from "../lists/AuthorizedSedesList";
import { Redirect } from "react-router-dom";
import firebase from "firebase";
const manager = new AuthenticationManager();
const databaseConnection = new DatabaseConnection();

export default () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  var user = firebase.auth().currentUser;
  return (
    <Form
      onSubmit={e => {
        e.preventDefault();
        e.stopPropagation();
        manager.login(email, password).catch(function(err) {
          alert("Datos erroneos");
        });
        firebase.auth().onAuthStateChanged(function(user) {
          if (user) {
            alert("Has iniciado sesion");
          }
        });
      }}
    >
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Correo electrónico</Form.Label>
          <Form.Control
            type="email"
            onChange={e => setEmail(e.target.value)}
            placeholder="Ingresa tu correo electrónico"
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control
            type="password"
            onChange={e => setPassword(e.target.value)}
            placeholder="Ingresa tu contraseña"
          />
        </Form.Group>
        <Form.Group controlId="formBasicChecbox" />
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Form>
  );
};
