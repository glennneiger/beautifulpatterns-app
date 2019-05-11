import React, { Component, useState, useEffect } from "react";
import { Sede } from "../models/Sede";
import { DatabaseConnection } from "../database/databaseConnection";
import { string } from "prop-types";
const databaseConnection = new DatabaseConnection();
export default () => {
  const [sedes, setSedes] = useState([]);
  useEffect(() => {
    databaseConnection.getSedes().then(ref => {
      setSedes(ref);
    });
  });
  return (
    <div>
      <h1>Sedes:</h1>
      {sedes.map((x: { sedeId: string; data: Sede }, i) => (
        <p>
          Sede {x.data.institution}:{}
        </p>
      ))}
    </div>
  );
};
