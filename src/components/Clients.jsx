import React from "react";
import Cards from "./Cards/Cards";
import Table from "./Table/Table";
import "./Clients.css";
const Clients = () => {
  return (
    <div className="Clients">
      <h1>Clients</h1>
      <Cards />
      <Table />
    </div>
  );
};

export default Clients;