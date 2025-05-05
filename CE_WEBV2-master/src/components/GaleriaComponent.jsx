import React from "react";
import Galeria from "../../public/Iconos de figma/Galeria.png";
import Galeria2 from "../../public/Iconos de figma/Galeria2.png";
import Avatar1 from "../../public/Iconos de figma/Avatar1.png";

export const GaleriaComponent = () => {
  return (
    <>
      <div className="row justify-content-start">
        <div className="col-auto col-sm-6 col-lg-3 col-lg-3 col-xl-3 col-xxl-3">
          <img src={Galeria} alt="Galeria" />
        </div>
        <div className="col-auto col-sm-6 col-lg-9 col-lg-9 col-xl-9 col-xxl-9">
          <img src={Avatar1} alt="Avatar" />
          <h4>Brea Santos Florea</h4>
        </div>
      </div>
      <div class="row row-cols-4">
        <div class="col-auto col-sm-6 col-lg-4 col-lg-3 col-xl-3 col-xxl-3 my-1">
          <div className="card text-center">
            <div className="card-body">
              <img src={Galeria2} alt="Foto" className="mb-2" />
              <h4>20/03/2025</h4>
            </div>
          </div>
        </div>
        <div class="col-auto col-sm-6 col-lg-4 col-lg-3 col-xl-3 col-xxl-3 my-1">
          <div className="card text-center">
            <div className="card-body">
              <img src={Galeria2} alt="Foto" className="mb-2" />
              <h4>20/03/2025</h4>
            </div>
          </div>
        </div>
        <div class="col-auto col-sm-6 col-lg-4 col-lg-3 col-xl-3 col-xxl-3 my-1">
          <div className="card text-center">
            <div className="card-body">
              <img src={Galeria2} alt="Foto" className="mb-2" />
              <h4>20/03/2025</h4>
            </div>
          </div>
        </div>
        <div class="col-auto col-sm-6 col-lg-4 col-lg-3 col-xl-3 col-xxl-3 my-1">
          <div className="card text-center">
            <div className="card-body">
              <img src={Galeria2} alt="Foto" className="mb-2" />
              <h4>20/03/2025</h4>
            </div>
          </div>
        </div>
        <div class="col-auto col-sm-6 col-lg-4 col-lg-3 col-xl-3 col-xxl-3 my-1">
          <div className="card text-center">
            <div className="card-body">
              <img src={Galeria2} alt="Foto" className="mb-2" />
              <h4>20/03/2025</h4>
            </div>
          </div>
        </div>
        <div class="col-auto col-sm-6 col-lg-4 col-lg-3 col-xl-3 col-xxl-3 my-1">
          <div className="card text-center">
            <div className="card-body">
              <img src={Galeria2} alt="Foto" className="mb-2" />
              <h4>20/03/2025</h4>
            </div>
          </div>
        </div>
        <div class="col-auto col-sm-6 col-lg-4 col-lg-3 col-xl-3 col-xxl-3 my-1">
          <div className="card text-center">
            <div className="card-body">
              <img src={Galeria2} alt="Foto" className="mb-2" />
              <h4>20/03/2025</h4>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col text-end">
          <button
            class="btn btn-outline-secondary mx-1 btn-pagar"
            type="button"
          >
            Anterior
          </button>
          <button
            class="btn btn-outline-secondary mx-1 btn-pagar"
            type="button"
          >
            Siguiente
          </button>
        </div>
      </div>
    </>
  );
};
