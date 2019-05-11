import React, { Component, useState } from "react";
import { DatabaseConnection } from "../database/databaseConnection";
import { Sede } from "../models/Sede";
import { Form, Button, Col } from "react-bootstrap";
import { AuthenticationManager } from "../authentication/AuthenticationManager";
const manager = new AuthenticationManager();

const databaseConnection = new DatabaseConnection();
console.log(databaseConnection.getSedes());
export default () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [institution, setInstitution] = useState("");
  const [studentCapacity, setStudentCapacity] = useState(0);
  const [availableSpaces, setAvailableSpaces] = useState(0);
  const [motivation, setMotivation] = useState("");
  const [description, setDescription] = useState("");
  const [representant, setRepresentant] = useState("");
  const [phone, setPhone] = useState("");

  return (
    <Form
      onSubmit={e => {
        e.preventDefault();
        e.stopPropagation();
        console.log(email);
        manager.signup(email, password).then(user => {
          const sede: Sede = {
            institution,
            studentCapacity,
            availableSpaces,
            motivation,
            description,
            representant,
            phone,
            authorized: false
          };
          databaseConnection
            .addSede(sede)
            .then(() => window.alert("Registro exitoso"));
        });
      }}
    >
      <Form.Row>
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Correo electrónico</Form.Label>
          <Form.Control
            value={email}
            onChange={e => setEmail(e.target.value)}
            type="email"
            placeholder="Enter email"
          />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control
            value={password}
            onChange={e => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
          />
        </Form.Group>
      </Form.Row>

      <Form.Row>
        <Form.Group as={Col} controlId="formGridnstitution">
          <Form.Label>Institución</Form.Label>
          <Form.Control
            value={institution}
            onChange={e => setInstitution(e.target.value)}
            placeholder="Ej: ITESM Campus Monterrey"
          />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridAddress2">
          <Form.Label>Capacidad de alumnos</Form.Label>
          <Form.Control
            onChange={e => setStudentCapacity(e.target.value)}
            placeholder="Número de alumnos"
          />
        </Form.Group>
      </Form.Row>

      <Form.Row>
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>Espacios disponibles</Form.Label>
          <Form.Control
            value={availableSpaces}
            onChange={e => setAvailableSpaces(e.target.value)}
          />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridRecursos">
          <Form.Label>Recursos y capital disponible</Form.Label>
          <Form.Control
            value={description}
            onChange={e => setDescription(e.target.value)}
            placeholder="Descripción"
          />
        </Form.Group>
      </Form.Row>
      <Form.Row>
        <Form.Group as={Col} controlId="formBasicEmail">
          <Form.Label>Teléfono</Form.Label>
          <Form.Control
            value={phone}
            onChange={e => setPhone(e.target.value)}
            type="phone"
            placeholder="Escribe tu teléfono"
          />
        </Form.Group>

        <Form.Group as={Col} controlId="formBasicPassword">
          <Form.Label>Representante</Form.Label>
          <Form.Control
            value={representant}
            onChange={e => setRepresentant(e.target.value)}
            type="representant"
            placeholder="Escribe el nombre del representante"
          />
        </Form.Group>
      </Form.Row>
      <Form.Group as={Col} controlId="formGridMotivacion">
        <Form.Label>Motivación</Form.Label>
        <Form.Control
          value={motivation}
          onChange={e => setMotivation(e.target.value)}
          placeholder="Motivación por ser sede"
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Inscribirse
      </Button>
    </Form>
  );
};
