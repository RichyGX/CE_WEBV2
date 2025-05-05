import { Link } from "react-router-dom";
import Monotoreo from "../../public/Iconos de figma/Monitoreo.png";
import Salud2 from "../../public/Iconos de figma/Salud2.png";
import Actividad from "../../public/Iconos de figma/Actividad.png";
import { Table, Button } from "react-bootstrap";
import DownloadIcon from "@mui/icons-material/Download";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { red } from "@mui/material/colors";

export const MonitoreoComponent = () => {
  return (
    <>
      <div className="row">
        <div className="col">
          <div className="card" style={{ backgroundColor: "#2A007B" }}>
            <div className="card-body">
              <h3 className="card-title text-white"> Pagos pendientes</h3>

              <div className="tableScroll">
                <Table
                  striped
                  bordered
                  hover
                  responsive
                  className="HistorialPagos"
                >
                  <thead>
                    <tr>
                      <th>Concepto</th>
                      <th>Fecha limite de pago</th>
                      <th>Cantidad</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Pago de útiles escolares</td>
                      <td>20/MARZO/2025</td>
                      <td>$700</td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </div>
          </div>
          <div class="card mt-4">
            <div class="card-body">
              <div className="row">
                <div className="col-6 align-self-center text-center">
                  <span style={{ fontSize: 26, fontWeight: "bold" }}>
                    Monitoreo
                  </span>
                  <div className="align-self-center text-center">
                    <Link
                      to="/accesos"
                      type="button"
                      class="btn-pagar btn btn-outline-secondary mt-2"
                    >
                      Ver tarea
                    </Link>
                  </div>
                </div>
                <div className="col-6 align-self-center">
                  <img src={Monotoreo} alt="Monitor" />
                </div>
              </div>
              <div className="card mt-5" style={{ backgroundColor: "#D3D3FF" }}>
                <div className="card-body">
                  <div className="row">
                    <div className="col-sm-6 col-md-6 col-lg-2 col-xl-2 col-xxl-2 align-self-center">
                      <img src={Salud2} alt="salud" />
                    </div>
                    <div className="col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-4 align-self-center">
                      <div style={{ fontSize: 18, fontWeight: "bold" }}>
                        Actividad:{" "}
                        <span id="actividad" style={{ color: "#5F409C" }}>
                          Colorear
                        </span>
                      </div>
                      <div style={{ fontSize: 18, fontWeight: "bold" }}>
                        Salud física:{" "}
                        <span id="saludFisica" style={{ color: "#5F409C" }}>
                          Saludable
                        </span>
                      </div>
                      <div style={{ fontSize: 18, fontWeight: "bold" }}>
                        Estado de ánimo:{" "}
                        <span id="estadoAnimo" style={{ color: "#5F409C" }}>
                          Enojado
                        </span>
                      </div>
                    </div>
                    <div className="col ">
                      <img src={Actividad} alt="actividad" id="imgActividad" />
                    </div>
                    <div className=" col align-self-center">
                      <div>
                        <button
                          type="button"
                          class="btn btn-outline-secondary btn-sm"
                          style={{border: 0}}
                          title="Guardar en favoritos"
                        >
                          <FavoriteIcon fontSize="large" />
                        </button>
                      </div>
                      <div>
                        <button
                          type="button"
                          className="btn btn-outline-secondary btn-sm mt-3"
                          style={{border: 0}}
                          title="Guardar imagen"
                        >
                          <DownloadIcon fontSize="large" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card mt-5" style={{ backgroundColor: "#D3D3FF" }}>
                <div className="card-body">
                  <div className="row">
                    <div className="col-sm-6 col-md-6 col-lg-2 col-xl-2 col-xxl-2 align-self-center">
                      <img src={Salud2} alt="salud" />
                    </div>
                    <div className="col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-4 align-self-center">
                      <div style={{ fontSize: 18, fontWeight: "bold" }}>
                        Actividad:{" "}
                        <span id="actividad" style={{ color: "#5F409C" }}>
                          Colorear
                        </span>
                      </div>
                      <div style={{ fontSize: 18, fontWeight: "bold" }}>
                        Salud física:{" "}
                        <span id="saludFisica" style={{ color: "#5F409C" }}>
                          Enfermo
                        </span>
                      </div>
                      <div style={{ fontSize: 18, fontWeight: "bold" }}>
                        Estado de ánimo:{" "}
                        <span id="estadoAnimo" style={{ color: "#5F409C" }}>
                          Alegre
                        </span>
                      </div>
                    </div>
                    <div className="col ">
                      <img src={Actividad} alt="actividad" id="imgActividad" />
                    </div>
                    <div className="col align-self-center">
                      <div>
                        <button
                          type="button"
                          class="btn btn-outline-secondary btn-sm"
                          title="Guardar en favoritos"
                          style={{border: 0}}
                        >
                          <FavoriteIcon color="light" fontSize="large" />
                        </button>
                      </div>
                      <div>
                        <button
                          type="button"
                          class="btn btn-outline-secondary btn-sm mt-3"
                          title="Guardar imagen"
                          style={{border: 0}}
                        >
                          <DownloadIcon color="light" fontSize="large" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row mt-5">
                <div className="col">
                  <div className="tableScroll">
                    <Table
                      striped
                      bordered
                      hover
                      responsive
                      className="PagosPendientes"
                    >
                      <thead>
                        <tr>
                          <th>Fecha</th>
                          <th>Actividad</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>04/ABRIL/2025</td>
                          <td>4</td>
                        </tr>
                        <tr>
                          <td>03/ABRIL/2025</td>
                          <td>3</td>
                        </tr>
                        <tr>
                          <td>02/ABRIL/2025</td>
                          <td>5</td>
                        </tr>
                        <tr>
                          <td>01/ABRIL/2025</td>
                          <td>6</td>
                        </tr>
                        <tr>
                          <td>31/MARZO/2025</td>
                          <td>3</td>
                        </tr>
                        <tr>
                          <td>28/MARZO/2025</td>
                          <td>2</td>
                        </tr>
                      </tbody>
                    </Table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
