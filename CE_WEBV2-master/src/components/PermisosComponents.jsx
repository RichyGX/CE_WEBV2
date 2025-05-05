import React from "react";
import { Table, Button } from "react-bootstrap";
import EntradaImg from "../../public/Iconos de figma/Entrada.png";
import SalidaImg from "../../public/Iconos de figma/Salida.png";
import JustificanteImg from "../../public/Iconos de figma/Justificante.png";
import ReunionImg from "../../public/Iconos de figma/Reunion.png";

export const PermisosComponent = () => {
  return (
    <>
      <div className="card">
        <div className="card-body">
          <div className="row">
            <div className="col">
              <h4 className="card-title">
                <b>Tipo de solicitud</b>
              </h4>
            </div>
            <div className="col">
              <button type="button" class="btn btn-light">
                Permisos restantes{" "}
                <span
                  style={{
                    borderRadius: "50%",
                    padding: 10,
                    fontSize: 20,
                    marginLeft: 20,
                  }}
                  class="badge bg-secondary"
                >
                  3
                </span>
              </button>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col mb-3">
              <div
                class="card text-center "
                style={{ backgroundColor: "#D3D3FF" }}
              >
                <div class="card-body">
                  <img src={EntradaImg} alt="Entrada" />
                  <p>Entrada</p>
                </div>
              </div>
            </div>
            <div className="col mb-3">
              <div
                class="card text-center"
                style={{ backgroundColor: "#D3D3FF" }}
              >
                <div class="card-body">
                  <img src={SalidaImg} alt="Salida" />
                  <p>Salida</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-2">
            <div className="col mb-3">
              <div
                class="card text-center"
                style={{ backgroundColor: "#D3D3FF" }}
              >
                <div class="card-body">
                  <img src={JustificanteImg} alt="Justificante" />
                  <p>Justificante</p>
                </div>
              </div>
            </div>
            <div className="col mb-3">
              <div
                class="card text-center"
                style={{ backgroundColor: "#D3D3FF" }}
              >
                <div class="card-body">
                  <img src={ReunionImg} alt="Reunion" />
                  <p>Reunion</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col">
              <h4>
                <b>Permisos validados</b>
              </h4>
              <Table
                striped
                bordered
                hover
                responsive
                className="PagosPendientes"
              >
                <thead>
                  <tr>
                    <th>Fecha y hora</th>
                    <th>Estatus</th>
                    <th>Tipo de permiso</th>
                    <th>Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>30/MARZO/2025</td>
                    <td>Validado</td>
                    <td>Justificante médico</td>
                    <td>
                      <Button
                        variant="outline"
                        style={{ backgroundColor: "#5F409C", color: "white" }}
                        size="sm"
                        className="d-block mx-auto"
                      >
                        Ver permiso
                      </Button>
                    </td>
                  </tr>
                  <tr>
                    <td>30/MARZO/2025</td>
                    <td>Validado</td>
                    <td>Justificante para entrar tarde</td>
                    <td>
                      <Button
                        variant="outline"
                        style={{ backgroundColor: "#5F409C", color: "white" }}
                        size="sm"
                        className="d-block mx-auto"
                      >
                        Ver permiso
                      </Button>
                    </td>
                  </tr>
                  <tr>
                    <td>30/MARZO/2025</td>
                    <td>Validado</td>
                    <td>Justificante para salir antes</td>
                    <td>
                      <Button
                        variant="outline"
                        style={{ backgroundColor: "#5F409C", color: "white" }}
                        size="sm"
                        className="d-block mx-auto"
                      >
                        Ver permiso
                      </Button>
                    </td>
                  </tr>
                  <tr>
                    <td>30/MARZO/2025</td>
                    <td>Validado</td>
                    <td>Otra persona llevará a mi hijo</td>
                    <td>
                      <Button
                        variant="outline"
                        style={{ backgroundColor: "#5F409C", color: "white" }}
                        size="sm"
                        className="d-block mx-auto"
                      >
                        Ver permiso
                      </Button>
                    </td>
                  </tr>
                  <tr>
                    <td>30/MARZO/2025</td>
                    <td>Validado</td>
                    <td>Otra persona llevará a mi hijo</td>
                    <td>
                      <Button
                        variant="outline"
                        style={{ backgroundColor: "#5F409C", color: "white" }}
                        size="sm"
                        className="d-block mx-auto"
                      >
                        Ver permiso
                      </Button>
                    </td>
                  </tr>
                  <tr>
                    <td>30/MARZO/2025</td>
                    <td>Validado</td>
                    <td>Justificante por cuestión personal</td>
                    <td>
                      <Button
                        variant="outline"
                        style={{ backgroundColor: "#5F409C", color: "white" }}
                        size="sm"
                        className="d-block mx-auto"
                      >
                        Ver permiso
                      </Button>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col">
              <h4>
                <b>Historial de permisos</b>
              </h4>
              <Table
                striped
                bordered
                hover
                responsive
                className="PagosPendientes"
              >
                <thead>
                  <tr>
                    <th>Fecha y hora</th>
                    <th>Estatus</th>
                    <th>Tipo de permiso</th>
                    <th>Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>30/MARZO/2025</td>
                    <td>Validado</td>
                    <td>Justificante médico</td>
                    <td>
                      <Button
                        variant="outline"
                        style={{ backgroundColor: "#5F409C", color: "white" }}
                        size="sm"
                        className="d-block mx-auto"
                      >
                        Ver permiso
                      </Button>
                    </td>
                  </tr>
                  <tr>
                    <td>30/MARZO/2025</td>
                    <td>Validado</td>
                    <td>Justificante para entrar tarde</td>
                    <td>
                      <Button
                        variant="outline"
                        style={{ backgroundColor: "#5F409C", color: "white" }}
                        size="sm"
                        className="d-block mx-auto"
                      >
                        Ver permiso
                      </Button>
                    </td>
                  </tr>
                  <tr>
                    <td>30/MARZO/2025</td>
                    <td>Validado</td>
                    <td>Justificante para salir antes</td>
                    <td>
                      <Button
                        variant="outline"
                        style={{ backgroundColor: "#5F409C", color: "white" }}
                        size="sm"
                        className="d-block mx-auto"
                      >
                        Ver permiso
                      </Button>
                    </td>
                  </tr>
                  <tr>
                    <td>30/MARZO/2025</td>
                    <td>Validado</td>
                    <td>Otra persona llevará a mi hijo</td>
                    <td>
                      <Button
                        variant="outline"
                        style={{ backgroundColor: "#5F409C", color: "white" }}
                        size="sm"
                        className="d-block mx-auto"
                      >
                        Ver permiso
                      </Button>
                    </td>
                  </tr>
                  <tr>
                    <td>30/MARZO/2025</td>
                    <td>Validado</td>
                    <td>Otra persona llevará a mi hijo</td>
                    <td>
                      <Button
                        variant="outline"
                        style={{ backgroundColor: "#5F409C", color: "white" }}
                        size="sm"
                        className="d-block mx-auto"
                      >
                        Ver permiso
                      </Button>
                    </td>
                  </tr>
                  <tr>
                    <td>30/MARZO/2025</td>
                    <td>Validado</td>
                    <td>Justificante por cuestión personal</td>
                    <td>
                      <Button
                        variant="outline"
                        style={{ backgroundColor: "#5F409C", color: "white" }}
                        size="sm"
                        className="d-block mx-auto"
                      >
                        Ver permiso
                      </Button>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
