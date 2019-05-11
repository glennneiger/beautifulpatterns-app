import React, { Component, useState } from "react";
import { DatabaseConnection } from "../database/databaseConnection";
import { Form, Button } from "react-bootstrap";
import { AuthenticationManager } from "../authentication/AuthenticationManager";
import { Student } from "../models/Student";

const manager = new AuthenticationManager();
const databaseConnection = new DatabaseConnection();

export default () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Form
      onSubmit={e => {
        e.preventDefault();
        e.stopPropagation();
        console.log(email);
        manager.signup(email, password).then(user => {
          databaseConnection
            .addStudent()
            .then(() => window.alert("Registro exitoso"));
        });
      }}
    >
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Correo electrónico</Form.Label>
        <Form.Control
          value={email}
          onChange={e => setEmail(e.target.value)}
          type="email"
          placeholder="Enter email"
        />
        <Form.Text className="text-muted">
          Introduce tu correo electrónico
        </Form.Text>
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Contraseña</Form.Label>
        <Form.Control
          value={password}
          onChange={e => setPassword(e.target.value)}
          type="password"
          placeholder="Password"
        />
      </Form.Group>
      <Form.Group controlId="formBasicChecbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};
