
import { Link } from "react-router-dom";
import AvatarComponent from "../components/AvatarComponent";
import Monotoreo from "../../public/Iconos de figma/Monitoreo.png";
import Salud from "../../public/Iconos de figma/Salud.png";
import Actividad from "../../public/Iconos de figma/Actividad.png";
import { Table, Button } from 'react-bootstrap';
import DownloadIcon from '@mui/icons-material/Download';
import FavoriteIcon from '@mui/icons-material/Favorite';

export const MonitoreoComponent = () => {
    return (
        <>
       <AvatarComponent/>


                        <div className="row">
                            <div className="col">
                            <div className="card" style={{backgroundColor: "#5F409C"}}>
                                                <div className="card-body">
                                <h3 className="card-title text-white"> Pagos pendientes</h3>

                                                <div className="tableScroll">
                                                                <Table striped bordered hover responsive className='HistorialPagos'>
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
                                                <span style={{fontSize: 26, fontWeight: "bold", }}>Monitoreo</span>
                                                <div className="align-self-center text-center">
                                                <Link to="/accesos" type="button" class="btn btn-outline-secondary mt-2" style={{ textDecoration: 'none'}} >Ver tarea</Link>
                                                </div>

                                            </div>
                                            <div className="col-6 align-self-center">
                                                <img src={Monotoreo}  alt="Monitor"/>
                                            </div>
                                           
                                        </div>
                                        <div className="card mt-5" style={{backgroundColor: "#D3D3FF"}}>
                                            <div className="card-body">
                                            <div className="row">
                                            <div className="col-sm-6 col-md-6 col-lg-2 col-xl-2 col-xxl-2 align-self-center">
                                                <img src={Salud} alt="salud" />
                                            </div>
                                            <div className="col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-4 align-self-center">
                                                <div style={{fontSize: 18, fontWeight: "bold"}}>Actividad: <span id="actividad" style={{color: "#339901"}}>Colorear</span></div>
                                                <div style={{fontSize: 18, fontWeight: "bold"}}>Salud física: <span id="saludFisica"style={{color: "#339901"}}>Saludable</span></div>
                                                <div style={{fontSize: 18, fontWeight: "bold"}}>Estado de ánimo: <span id="estadoAnimo" style={{color: "#339901"}}>Enojado</span></div>
                                            </div>
                                            <div className="col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-4 ">
                                            <img src={Actividad} alt="actividad" id="imgActividad" />

                                            </div>
                                            <div className=" col-sm-6 col-md-6 col-lg-2 col-xl-2 col-xxl-2">
                                                <div>
                                                    <button type="button" class="btn btn-outline-secondary btn-sm"><FavoriteIcon color="light" fontSize="large" /></button>
                                                </div>
                                                <div>
                                                    <button type="button" class="btn btn-outline-secondary btn-sm mt-3"><DownloadIcon color="light" fontSize="large" /></button>
                                                </div>
                                            </div>
                                        </div>
                                            </div>
                                        </div>
                                        <div className="card mt-5" style={{backgroundColor: "#D3D3FF"}}>
                                            <div className="card-body">
                                            <div className="row">
                                            <div className="col-sm-6 col-md-6 col-lg-2 col-xl-2 col-xxl-2 align-self-center">
                                                <img src={Salud} alt="salud" />
                                            </div>
                                            <div className="col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-4 align-self-center">
                                                <div style={{fontSize: 18, fontWeight: "bold"}}>Actividad: <span id="actividad" style={{color: "#339901"}}>Colorear</span></div>
                                                <div style={{fontSize: 18, fontWeight: "bold"}}>Salud física: <span id="saludFisica" style={{color: "#339901"}}>Enfermo</span></div>
                                                <div style={{fontSize: 18, fontWeight: "bold"}}>Estado de ánimo: <span id="estadoAnimo" style={{color: "#339901"}}>Alegre</span></div>
                                            </div>
                                            <div className="col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-4 ">
                                            <img src={Actividad} alt="actividad" id="imgActividad" />

                                            </div>
                                            <div className="col-sm-6 col-md-6 col-lg-2 col-xl-2 col-xxl-2">
                                                <div>
                                                    <button type="button" class="btn btn-outline-secondary btn-sm"><FavoriteIcon color="light" fontSize="large" /></button>
                                                </div>
                                                <div>
                                                    <button type="button" class="btn btn-outline-secondary btn-sm mt-3"><DownloadIcon color="light" fontSize="large" /></button>
                                                </div>
                                            </div>
                                        </div>
                                            </div>
                                        </div>
                                        <div className="row mt-5">
                                            <div className="col">
                                            <div className="tableScroll">
                                                              <Table striped bordered hover responsive className='PagosPendientes'>
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
    )
} 









        
                        

                  

  

