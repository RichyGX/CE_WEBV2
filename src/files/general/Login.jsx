import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
const Login = () => {

  const navigate = useNavigate();
  const { loginAs } = useAuth();

  const handleLogin = (role) => {
    loginAs(role);
    navigate('/home');
  };

  return (
    <div className="backgroundLogin">
      <div>
        <div className="loginBicolorContainer">
          <div className="leftlogincontainer">
            <div className="leftlogincontent">

              <h1 >Iniciar Sesión</h1>
              <div style={{ display: 'flex', gap: '2em', flexDirection: 'column', marginTop: '3em', marginBottom: '2em' }}>
                <CustomInput placeHolder="Usuario" />
                <CustomInput placeHolder="Contraseña" />
              </div>


              <p><strong>¿Olvidaste tu contraseña?</strong></p>
              <CustomButton onClick={()=>{ handleLogin('directivos')}} title='Administrador'></CustomButton>
              <br/>
              <CustomButton onClick={()=>{ handleLogin('padres_familia')}} title='Usuario'></CustomButton>


            </div>


          </div>
          <div className="rightlogincontainer">
            <div className="rightLoginContent">
              <h1 style={{ color: 'white' }}>¿Aún no nos conoces?</h1>
              <button style={{ width: '50%', alignSelf: 'center', height: '2em' }} className="btn-secondary">CONTÁCTANOS</button>

            </div>

          </div>

        </div>

      </div>

    </div>
  )
}

export default Login