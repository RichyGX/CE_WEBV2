import React from 'react';
import { Table, Button } from 'react-bootstrap';


function Pagos() {
  return (
    <div className="container mt-5">
      {/* Botón Pago por concepto */}
      <div className="d-flex justify-content-start mb-4">
        <Button variant="outline-success">Pago por concepto</Button>
      </div>

      {/* Tabla de Pagos pendientes */}
      <h4>Pagos pendientes</h4>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Fecha límite de pago</th>
            <th>Monto</th>
            <th>Concepto</th>
            <th>Estado del pago</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>20/MARZO/2025</td>
            <td>$200</td>
            <td>Material didáctico</td>
            <td>Pendiente</td>
            <td>
              <Button variant="outline-success" size="sm">Pagar</Button>
            </td>
          </tr>
          <tr>
            <td>30/MARZO/2025</td>
            <td>$400</td>
            <td>Material didáctico</td>
            <td>Pendiente</td>
            <td>
              <Button variant="outline-success" size="sm">Pagar</Button>
            </td>
          </tr>
        </tbody>
      </Table>

      {/* Tabla de Historial de pagos */}
      <h4 className="mt-5">Historial de pagos</h4>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Fecha</th>
            <th>Monto</th>
            <th>Concepto</th>
            <th>Estado del pago</th>
            <th>Método de pago</th>
            <th>Descargar Comprobante</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>22/MARZO/2025</td>
            <td>$500</td>
            <td>Inscripción</td>
            <td>Realizado</td>
            <td>Tarjeta crédito</td>
            <td>
              <Button variant="outline-primary" size="sm">Descargar</Button>
            </td>
          </tr>
          <tr>
            <td>23/MARZO/2025</td>
            <td>$200</td>
            <td>Material didáctico</td>
            <td>Vencido</td>
            <td>PayPal</td>
            <td>
              <Button variant="outline-primary" size="sm">Descargar</Button>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default Pagos;