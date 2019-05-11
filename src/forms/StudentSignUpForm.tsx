import React, { Component, useState } from "react";
import { DatabaseConnection } from "../database/databaseConnection";
import { Form, Button, Col } from "react-bootstrap";
import { AuthenticationManager } from "../authentication/AuthenticationManager";
import { Student } from "../models/Student";

const manager = new AuthenticationManager();
const databaseConnection = new DatabaseConnection();

export default () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [age, setAge] = useState(0);

  return (
    <Form
      onSubmit={e => {
        e.preventDefault();
        e.stopPropagation();
        console.log(email);
        manager.signup(email, password).then(user => {
          const student: Student = {
            name,
            email,
            lastname,
            age,
            authorized: false
          };
          databaseConnection
            .addStudent(student)
            .then(() => window.alert("Registro exitoso"));
        });
      }}
    >
      <Form.Row>
        <Form.Group as={Col} controlId="formBasicNombre">
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            value={name}
            onChange={e => setName(e.target.value)}
            type="name"
            placeholder="Escribe tu nombre"
          />
        </Form.Group>

        <Form.Group as={Col} controlId="formBasicNombre">
          <Form.Label>Apellido</Form.Label>
          <Form.Control
            value={lastname}
            onChange={e => setLastname(e.target.value)}
            type="lastname"
            placeholder="Escribe tu apellido"
          />
        </Form.Group>

        <Form.Group as={Col} controlId="formBasicEmail">
          <Form.Label>Edad</Form.Label>
          <Form.Control
            onChange={e => setAge(e.target.value)}
            type="age"
            placeholder="Escribe tu edad"
          />
        </Form.Group>
      </Form.Row>
      <Form.Row>
        <Form.Group as={Col} controlId="formBasicEmail">
          <Form.Label>Correo electrónico</Form.Label>
          <Form.Control
            value={email}
            onChange={e => setEmail(e.target.value)}
            type="email"
            placeholder="Escribe tu correo"
          />
        </Form.Group>

        <Form.Group as={Col} controlId="formBasicPassword">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control
            value={password}
            onChange={e => setPassword(e.target.value)}
            type="password"
            placeholder="Contraseña"
          />
        </Form.Group>
      </Form.Row>
      <Form.Group controlId="formBasicChecbox" />
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};
