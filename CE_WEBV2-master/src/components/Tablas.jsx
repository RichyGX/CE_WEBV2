import React from 'react';
import { Table, Button } from 'react-bootstrap';
import AvatarComponent from './AvatarComponent';


function Pagos() {
  return (
    <div className="container mt-5">
      {/* Botón Pago por concepto */}
      <AvatarComponent/>
      <div className="d-flex justify-content-start mb-4">
        <Button variant="outline-success">Pago por concepto</Button>
      </div>

      {/* Tabla de Pagos pendientes */}
      <h4><b>Pagos pendientes</b></h4>
      <Table striped bordered hover responsive className='PagosPendientes'>
        <thead>
          <tr>
            <th>Fecha límite de pago</th>
            <th>Cantidad</th>
            <th>Concepto</th>
            <th>Estado del pago</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>30/MARZO/2025</td>
            <td>$300</td>
            <td>Material didáctico</td>
            <td>Pendiente</td>
            <td>
            <Button variant="outline-success" size="sm" className="d-block mx-auto">Pagar</Button>
            </td>
          </tr>
          <tr>
            <td>30/MARZO/2025</td>
            <td>$400</td>
            <td>Material didáctico</td>
            <td>Pendiente</td>
            <td>
              <Button variant="outline-success" size="sm" className="d-block mx-auto">Pagar</Button>
            </td>
          </tr>
          <tr>
            <td>30/MARZO/2025</td>
            <td>$200</td>
            <td>Material didáctico</td>
            <td>Pendiente</td>
            <td>
              <Button variant="outline-success" size="sm" className="d-block mx-auto">Pagar</Button>
            </td>
          </tr>
        </tbody>
      </Table>

      {/* Tabla de Historial de pagos */}
      <h4 className="mt-5"><b>Historial de pagos</b></h4>
      <Table striped bordered hover responsive className='HistorialPagos'>
        <thead>
          <tr>
            <th>Fecha</th>
            <th>Cantidad</th>
            <th>Concepto</th>
            <th>Estatus del pago</th>
            <th>Método de pago</th>
            <th>Descargar Comprobante</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>20/MARZO/2025</td>
            <td>$700</td>
            <td>Adeudo</td>
            <td>Realizado</td>
            <td>Tarjeta crédito</td>
            <td>
            <Button variant="outline-success" size="sm" className="d-block mx-auto">Descargar</Button>
            </td>
          </tr>
          <tr>
            <td>20/MARZO/2025</td>
            <td>$600</td>
            <td>Inscripción</td>
            <td>Vencido</td>
            <td>Tarjeta debito</td>
            <td>
            <Button variant="outline-success" size="sm" className="d-block mx-auto">Descargar</Button>
            </td>
          </tr>
          <tr>
            <td>21/MARZO/2025</td>
            <td>$600</td>
            <td>Inscripción</td>
            <td>Realizado</td>
            <td>Transferencia</td>
            <td>
            <Button variant="outline-success" size="sm" className="d-block mx-auto">Descargar</Button>
            </td>
          </tr>
          <tr>
            <td>19/MARZO/2025</td>
            <td>$600</td>
            <td>Inscripción</td>
            <td>Realizado</td>
            <td>Deposito</td>
            <td>
            <Button variant="outline-success" size="sm" className="d-block mx-auto">Descargar</Button>
            </td>
          </tr>
          <tr>
            <td>22/MARZO/2025</td>
            <td>$200</td>
            <td>Material didáctico</td>
            <td>Vencido</td>
            <td>Paypal</td>
            <td>
            <Button variant="outline-success" size="sm" className="d-block mx-auto">Descargar</Button>
            </td>
          </tr>
          <tr>
            <td>22/MARZO/2025</td>
            <td>$200</td>
            <td>Material didáctico</td>
            <td>Vencido</td>
            <td>Deposito</td>
            <td>
            <Button variant="outline-success" size="sm" className="d-block mx-auto">Descargar</Button>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default Pagos;