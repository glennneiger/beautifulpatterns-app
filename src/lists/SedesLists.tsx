import React, { Component, useState, useEffect } from "react";
import { Sede } from "../models/Sede";
import { DatabaseConnection } from "../database/databaseConnection";
import { string } from "prop-types";
const databaseConnection = new DatabaseConnection();
export default () => {
  const [sedes, setSedes] = useState([]);
  useEffect(() => {
    databaseConnection.getUnauthorizedSedes().then(ref => {
      setSedes(ref);
    });
  });
  return (
    <div>
      <h1>Sedes por autorizar:</h1>
      {sedes.map((x: { sedeId: string; data: Sede }, i) => (
        <p>
          Sede {x.data.institution}:{}
          <button
            onClick={() => {
              databaseConnection.updateAuthorized(x.sedeId);
            }}
          >
            Autorizar Sede{" "}
          </button>
        </p>
      ))}
    </div>
  );
};
