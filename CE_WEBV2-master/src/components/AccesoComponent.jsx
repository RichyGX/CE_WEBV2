import React from "react";
import { Table, Button } from "react-bootstrap";

function AccesoComponent() {
  return (
    <div className="container mt-5">
      {/* Tabla de Informe de entradas */}
      <div className="d-flex justify-content-start mb-4">
        <Button style={{ backgroundColor: "#5F409C", color: "white" }}>
          Cambiar Vista
        </Button>
      </div>
      <h4>
        <b>Informe de entradas </b>
      </h4>
      <Table striped bordered hover responsive className="TablaEntrada">
        <thead>
          <tr>
            <th>Fecha y hora</th>
            <th>Estado fisico</th>
            <th>Encargado de entrega</th>
            <th>Comentarios</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>DD-MM-YYYY 00:00:00</td>
            <td>Todo bien</td>
            <td>Ricardo Guzmán Sánchez</td>
            <td>Sin comentarios</td>
          </tr>
          <tr>
            <td>DD-MM-YYYY 00:00:00</td>
            <td>Todo bien</td>
            <td>Ricardo Guzmán Sánchez</td>
            <td>Sin comentarios</td>
          </tr>
          <tr>
            <td>DD-MM-YYYY 00:00:00</td>
            <td>Todo bien</td>
            <td>Ricardo Guzmán Sánchez</td>
            <td>Sin comentarios</td>
          </tr>
          <tr>
            <td>DD-MM-YYYY 00:00:00</td>
            <td>Todo bien</td>
            <td>Ricardo Guzmán Sánchez</td>
            <td>Sin comentarios</td>
          </tr>
          <tr>
            <td>DD-MM-YYYY 00:00:00</td>
            <td>Todo bien</td>
            <td>Elias Arias Vilchez</td>
            <td>Permiso especial aceptado</td>
          </tr>
          <tr>
            <td>DD-MM-YYYY 00:00:00</td>
            <td>Todo bien</td>
            <td>Elias Arias Vilchez</td>
            <td>Permiso especial aceptado</td>
          </tr>
        </tbody>
      </Table>

      {/* Tabla de Informe de Salidas*/}
      <h4 className="mt-5">
        <b>Informe de salidas</b>
      </h4>
      <Table striped bordered hover responsive className="TablaEntrada">
        <thead>
          <tr>
            <th>Fecha y hora</th>
            <th>Estado fisico</th>
            <th>Encargado de recepcion</th>
            <th>Comentarios</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>DD-MM-YYYY 00:00:00</td>
            <td>Todo bien</td>
            <td>Ricardo Guzmán Sánchez</td>
            <td>Sin comentarios</td>
          </tr>
          <tr>
            <td>DD-MM-YYYY 00:00:00</td>
            <td>Todo bien</td>
            <td>Ricardo Guzmán Sánchez</td>
            <td>Sin comentarios</td>
          </tr>
          <tr>
            <td>DD-MM-YYYY 00:00:00</td>
            <td>Todo bien</td>
            <td>Ricardo Guzmán Sánchez</td>
            <td>Sin comentarios</td>
          </tr>
          <tr>
            <td>DD-MM-YYYY 00:00:00</td>
            <td>Todo bien</td>
            <td>Ricardo Guzmán Sánchez</td>
            <td>Sin comentarios</td>
          </tr>
          <tr>
            <td>DD-MM-YYYY 00:00:00</td>
            <td>Todo bien</td>
            <td>Elias Arias Vilchez</td>
            <td>Permiso especial aceptado</td>
          </tr>
          <tr>
            <td>DD-MM-YYYY 00:00:00</td>
            <td>Todo bien</td>
            <td>Elias Arias Vilchez</td>
            <td>Permiso especial aceptado</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default AccesoComponent;
