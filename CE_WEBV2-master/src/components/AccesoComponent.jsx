import React from 'react';
import { Table } from 'react-bootstrap';


function AccesoComponent() {
  return (
    <div className="container mt-5">

      {/* Tabla de Informa de entradas */}
      <h4><b>Informe de entradas </b></h4>
      <Table striped bordered hover responsive className='TablaEntrada'>
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
            <td>
            </td>
          </tr>
          <tr>
            <td>DD-MM-YYYY 00:00:00</td>
            <td>Todo bien</td>
            <td>Ricardo Guzmán Sánchez</td>
            <td>Sin comentarios</td>
            <td>
            </td>
          </tr>
          <tr>
            <td>DD-MM-YYYY 00:00:00</td>
            <td>Todo bien</td>
            <td>Ricardo Guzmán Sánchez</td>
            <td>Sin comentarios</td>
            <td>
            </td>
          </tr>
          <tr>
            <td>DD-MM-YYYY 00:00:00</td>
            <td>Todo bien</td>
            <td>Ricardo Guzmán Sánchez</td>
            <td>Sin comentarios</td>
            <td>
            </td>
          </tr>
          <tr>
            <td>DD-MM-YYYY 00:00:00</td>
            <td>Todo bien</td>
            <td>Elias Arias Vilchez</td>
            <td>Permiso especial aceptado</td>
            <td>
            </td>
          </tr>
          <tr>
            <td>DD-MM-YYYY 00:00:00</td>
            <td>Todo bien</td>
            <td>Elias Arias Vilchez</td>
            <td>Permiso especial aceptado</td>
            <td>
            </td>
          </tr>
        </tbody>
      </Table>

      {/* Tabla de Informe de Salidas*/}
      <h4 className="mt-5"><b>Informe de salidas</b></h4>
      <Table striped bordered hover responsive className='TablaEntrada'>
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
            <td>
            </td>
          </tr>
          <tr>
            <td>DD-MM-YYYY 00:00:00</td>
            <td>Todo bien</td>
            <td>Ricardo Guzmán Sánchez</td>
            <td>Sin comentarios</td>
            <td>
            </td>
          </tr>
          <tr>
            <td>DD-MM-YYYY 00:00:00</td>
            <td>Todo bien</td>
            <td>Ricardo Guzmán Sánchez</td>
            <td>Sin comentarios</td>
            <td>
            </td>
          </tr>
          <tr>
            <td>DD-MM-YYYY 00:00:00</td>
            <td>Todo bien</td>
            <td>Ricardo Guzmán Sánchez</td>
            <td>Sin comentarios</td>
            <td>
            </td>
          </tr>
          <tr>
            <td>DD-MM-YYYY 00:00:00</td>
            <td>Todo bien</td>
            <td>Elias Arias Vilchez</td>
            <td>Permiso especial aceptado</td>
            <td>
            </td>
          </tr>
          <tr>
            <td>DD-MM-YYYY 00:00:00</td>
            <td>Todo bien</td>
            <td>Elias Arias Vilchez</td>
            <td>Permiso especial aceptado</td>
            <td>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default AccesoComponent;