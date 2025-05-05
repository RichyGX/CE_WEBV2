import AjustesImg from '../../public/Iconos de figma/Ajustes.png'
import EscuelaImg from '../../public/Iconos de figma/Escuela.png'

export const AjustesComponent = () => {
  return (
    <>
      <div className="row align-items-center">
      <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4 text-sm-center ">
      <img src={AjustesImg} alt='Ajustes' /> 
      </div>
      
        <div className="col-sm-12 col-md-8 col-lg-8 col-xl-8 col-xxl-8">
          <h4>
            <b>Datos de la escuela</b>
          </h4>
          <div>
            <span>Nombre de la escuela: </span>
            <b>
              <span>Miguel Hidalgo</span>
            </b>
          </div>
          <div>
            <span>CCT: </span>
            <b>
              <span>******</span>
            </b>
          </div>
          <div>
            <span>Ubicación: </span>
            <b>
              <span>******</span>
            </b>
          </div>
          <div>
            <span>Número de contacto: </span>
            <b>
              <span>******</span>
            </b>
          </div>
          <div>
            <span>Horario de atención: </span>
            <b>
              <span>******</span>
            </b>
          </div>

          
            
        </div>
        </div>
        <div className="row">
          <div className="col-4">

          </div>
          <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
          <h4>
              <b>Generales</b>
            </h4>
          
          <div>
            <a href=''>Politica de privacidad: </a>
          </div>
          <div>
            <a href=''>Terminos y condiciones: </a>
          </div>
          </div>
          <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
          <img src={EscuelaImg} alt='Escuela' /> 
          </div>
        </div>
    </>
  );
};
