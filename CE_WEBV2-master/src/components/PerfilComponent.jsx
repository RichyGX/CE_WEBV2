import Avatar1 from "../../public/Iconos de figma/Avatar1.png";
import Avatar2 from "../../public/Iconos de figma/Avatar2.png";
import Perfil from "../../public/Iconos de figma/Perfil.png";
import Carpeta from "../../public/Iconos de figma/Carpeta.png";

export const PerfilComponent = () => {
  return (
    <>
      <h3>Mis Hijos</h3>
      <div className="row mb-4">
        <div className="col mb-3">
          <div className="card text-center">
            <div className="card-body">
              <img src={Avatar1} alt="Avatar1" />
              <div>
                <h4> Brea Santos Florea</h4>
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card text-center">
            <div className="card-body">
              <img src={Avatar2} alt="Avatar2" />
              <div>
                <h4> Maria Santos Florea</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h3>Datos de los padres</h3>
      <div className="row mb-3">
        <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4 text-center mb-3">
          <img src={Perfil} alt="Perfil" style={{ width: 200, height: 200 }} />
        </div>
        <div className="col-sm-12 col-md-8 col-lg-8 col-xl-8 col-xxl-8">
          <h4>
            {" "}
            <b> Datos del padre o tutor </b>
          </h4>
          <div>
            <b>
              {" "}
              <span>Nombre: </span>
            </b>
            <span>María Santos Florea</span>
          </div>
          <div>
            <b>
              {" "}
              <span>Fecha de nacimiento: </span>
            </b>
            <span>***************</span>
          </div>
          <div>
            <b>
              {" "}
              <span>Ocupación: </span>
            </b>
            <span>***************</span>
          </div>
          <div>
            <b>
              {" "}
              <span>Dirección: </span>
            </b>
            <span>***************</span>
          </div>
          <div>
            <b>
              {" "}
              <span>Teléfono: </span>{" "}
            </b>
            <span>***************</span>
          </div>
          <div>
            <b>
              {" "}
              <span>Curp: </span>{" "}
            </b>
            <span>***************</span>
          </div>
          <div>
            <b>
              {" "}
              <span>Email: </span>{" "}
            </b>
            <span>***************</span>
          </div>
          <div>
            <b>
              <span>RFC: </span>{" "}
            </b>
            <span>***************</span>
          </div>
          <div class="d-grid gap-2 d-md-flex justify-content-md-end mt-2">
            <button
              class="btn btn me-md-2"
              type="button"
              style={{ backgroundColor: "#5F409C", color: "white" }}
            >
              Editar mi información
            </button>
          </div>
        </div>
      </div>
      <div className="row mb-3">
        <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4 text-center">
          <img src={Perfil} alt="Perfil" style={{ width: 200, height: 200 }} />
        </div>
        <div className="col-sm-12 col-md-8 col-lg-8 col-xl-8 col-xxl-8">
          <div>
            <h4>
              {" "}
              <b> Datos de la madre o tutor </b>
            </h4>
            <b>
              <span>Nombre: </span>
            </b>
            <span>María Santos Florea</span>
          </div>
          <div>
            <b>
              <span>Fecha de nacimiento: </span>
            </b>
            <span>***************</span>
          </div>
          <div>
            <b>
              <span>Ocupación: </span>
            </b>
            <span>***************</span>
          </div>
          <div>
            <b>
              <span>Dirección: </span>
            </b>
            <span>***************</span>
          </div>
          <div>
            <b>
              <span>Teléfono: </span>
            </b>
            <span>***************</span>
          </div>
          <div>
            <b>
              <span>Curp: </span>
            </b>
            <span>***************</span>
          </div>
          <div>
            <b>
              <span>Email: </span>
            </b>
            <span>***************</span>
          </div>
          <div>
            <b>
              <span>RFC: </span>
            </b>
            <span>***************</span>
          </div>
        </div>
      </div>
      <h3>
        {" "}
        <b> Contactos de emergencia</b>
      </h3>
      <div className="row mt-2">
        <div className="col">
          <div>
            <span>
              <b>Nombre de contacto 1: </b>
            </span>
            <span>************</span>
          </div>
          <div>
            <span>
              <b>Teléfono: </b>
            </span>
            <span>************</span>
          </div>
          <div>
            <span>
              <b>Parentesco: </b>
            </span>
            <span>Tio</span>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <div>
            <span>
              <b>Nombre de contacto 2: </b>
            </span>
            <span>************</span>
          </div>
          <div>
            <span>
              <b>Teléfono: </b>
            </span>
            <span>************</span>
          </div>
          <div>
            <span>
              <b>Parentesco: </b>
            </span>
            <span>Tio</span>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <div>
            <span>
              <b>Nombre de contacto 3: </b>
            </span>
            <span>************</span>
          </div>
          <div>
            <span>
              <b>Teléfono: </b>
            </span>
            <span>************</span>
          </div>
          <div>
            <span>
              <b>Parentesco: </b>
            </span>
            <span>Tio</span>
          </div>
        </div>
        <div className="col">
          <div class="d-grid gap-2 col-6 mx-auto">
            <button
              class="btn btn"
              style={{ backgroundColor: "#5F409C", color: "white" }}
              type="button"
            >
              Añadir contacto
            </button>
            <button
              class="btn btn"
              style={{ backgroundColor: "#5F409C", color: "white" }}
              type="button"
            >
              Editar información
            </button>
          </div>
        </div>
      </div>

      <h3>
        <b>Autorizados a recoger al alumno</b>
      </h3>
      <div className="row">
        <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
          <div>
            <span>
              <b>Nombre de contacto 1: </b>
            </span>
            <span>************</span>
          </div>
          <div>
            <span>
              <b>Teléfono: </b>
            </span>
            <span>************</span>
          </div>
          <div>
            <span>
              <b>Parentesco: </b>
            </span>
            <span>Tio</span>
          </div>
          <div className="card mt-3">
            <div className="card-body">
              <div className="row align-items-center">
                <div className="col">
                  <img src={Carpeta} alt="Carpeta" class="img-fluid" />
                </div>
                <div className="col">
                  <div>
                    <span>
                      <b>Identificación.pdf </b>
                    </span>
                  </div>
                  <div>
                    <span>
                      <b>Peso: </b>
                    </span>
                    <span>15</span>
                    <span>MB</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
          <div>
            <span>
              <b>Nombre de contacto 2: </b>
            </span>
            <span>************</span>
          </div>
          <div>
            <span>
              <b>Teléfono: </b>
            </span>
            <span>************</span>
          </div>
          <div>
            <span>
              <b>Parentesco: </b>
            </span>
            <span>Tio</span>
          </div>
          <div className="card mt-3">
            <div className="card-body">
              <div className="row align-items-center">
                <div className="col">
                  <img src={Carpeta} alt="Carpeta" class="img-fluid" />
                </div>
                <div className="col">
                  <div>
                    <span>
                      <b>Identificación.pdf </b>
                    </span>
                  </div>
                  <div>
                    <span>
                      <b>Peso: </b>
                    </span>
                    <span>15</span>
                    <span>MB</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 align-self-end my-3">
          <div class="alert alert-light" role="alert">
            El limite de contactos autorizados fue alcanzado, por favor
            modifique algún contacto existente o elimine uno para crear otro
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
          <div>
            <span>
              <b>Nombre de contacto 3: </b>
            </span>
            <span>************</span>
          </div>
          <div>
            <span>
              <b>Teléfono: </b>
            </span>
            <span>************</span>
          </div>
          <div>
            <span>
              <b>Parentesco: </b>
            </span>
            <span>Tio</span>
          </div>
          <div className="card mt-3">
            <div className="card-body">
              <div className="row align-items-center">
                <div className="col">
                  <img src={Carpeta} alt="Carpeta" class="img-fluid" />
                </div>
                <div className="col">
                  <div>
                    <span>
                      <b>Identificación.pdf </b>
                    </span>
                  </div>
                  <div>
                    <span>
                      <b>Peso: </b>
                    </span>
                    <span>15</span>
                    <span>MB</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 align-self-start my-3">
          <div class="d-grid gap-2 col-6 mx-auto">
            <button
              class="btn btn"
              style={{ backgroundColor: "#5F409C", color: "white" }}
              type="button"
            >
              Añadir contacto
            </button>
            <button
              class="btn btn"
              style={{ backgroundColor: "#5F409C", color: "white" }}
              type="button"
            >
              Editar información
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
