import React from "react";
import Avatar1 from "../../public/Iconos de figma/Avatar1.png";
import Tareas from "../../public/Iconos de figma/Tareas.png";
import Tareas2 from "../../public/Iconos de figma/Tareas2.png";
import { Table } from "react-bootstrap";


export const TareasComponent = () => {
  return (
    <>
      <div className="row">
        <div className="col-auto col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
            <img src={Tareas} alt="Tareas" className="img-fluid" />
        </div>
        <div className="col-auto col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
            <img src={Avatar1} alt="Avatar1" />
            <h4>Bea Santos Florea</h4>

        </div>
        <div className=" col-auto col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4 align-self-center">
            <h3 className="text-center mb-4">Registro de tareas</h3>
            <div style={{backgroundColor: "#2A007B", padding: 8, color: "white", textAlign: "center"}}>
                <span>Grupo: </span><span>2</span><span>B</span>
            </div>

        </div>
      </div>

      <div className="card" style={{backgroundColor: "#D3D3FF"}}>
        <div className="card-body">
            <div className="row align-items-center">
                <div className="col-sm-9 col-md-10 col-lg-10 col-xl-10 col-xxl-10">
<div>
   <span style={{color: "#FF3301", fontWeight: "bold"}}>Nombre de tarea:</span><span><b>Colorear</b></span>
</div>
<div>
   <span style={{color: "#FF3301", fontWeight: "bold"}}>Descripción: </span><span><b>Colorear el dibujo de la pagina 40</b></span>
</div>
                </div>
                <div className="col-sm-3 col-md-2 col-lg-2 col-xl-2 col-xxl-2">
<img src={Tareas2} alt="Tareas2" style={{width: 80, height: 80}}/>
                </div>
            </div>
        </div>
      </div>
      <div className="row">
        <div className="col">
        <Table
                  striped
                  bordered
                  hover
                  responsive
                  className="HistorialPagos"
                >
                  <thead>
                    <tr>
                      <th>Fecha</th>
                      <th>Tareas</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>19/MARZO/2025</td>
                      <td>4</td>
                    </tr>
                    <tr>
                      <td>19/MARZO/2025</td>
                      <td>3</td>
                    </tr>
                    <tr>
                      <td>20/MARZO/2025</td>
                      <td>5</td>
                    </tr>
                    <tr>
                      <td>20/MARZO/2025</td>
                      <td>6</td>
                    </tr>
                    <tr>
                      <td>20/MARZO/2025</td>
                      <td>3</td>
                    </tr>
                  </tbody>
                </Table>
        </div>
      </div>
     
    </>
  );
};
