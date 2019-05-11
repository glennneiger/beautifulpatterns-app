import { Tabs, Tab } from "react-bootstrap";
import React from "react";
import ReactDOM from "react-dom";
import UnauthorizedSedesList from "./UnauthorizedSedesList";
import AuthorizedSedesList from "./AuthorizedSedesList";
import "bootstrap/dist/css/bootstrap.css";

export default () => {
  return (
    <div>
      <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
        <Tab eventKey="AuthorizedSedesList" title="Sedes autorizadas">
          <AuthorizedSedesList />
        </Tab>
        <Tab eventKey="UnauthorizedSedesList" title="Sedes sin autorizar">
          <UnauthorizedSedesList />
        </Tab>
        <Tab eventKey="contact" title="Contact" disabled />
      </Tabs>
    </div>
  );
};
