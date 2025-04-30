import { Link } from "react-router-dom";
import AvatarComponent from "../../components/AvatarComponent";
import { Table, Button } from "react-bootstrap";
import CloseIcon from '@mui/icons-material/Close';
import { CalendarProxEvento } from "../../components/CalendarProxEvento";
import AccesosRapidosComponent from "../../components/AccesosRapidosComponent";

export const HomePadres = () => {
  return (
   <>
    
<AvatarComponent/>

                        <div className="row">
                            <div className="col">
                                <div class="card mt-4" style={{backgroundColor: "#2A007B"}}>
                                    <div class="card-body">
                                        <div className="row">
                                            <div className="col-11">
                                                <span style={{fontSize: 24, color: "white"}}>Próximo pago</span>
                                            </div>
                                            <div className="col-1">
                                                <button className="btnCerrarProxPago"><CloseIcon style={{ color: 'white' }}/></button>
                                            </div>
                                        </div>


                                        <div className="card mt-2">
                                            <div className="card-body">
                                                <Link to="/panel" type="button" class="btn btn-outline-secondary mb-3" style={{ textDecoration: 'none'}} >
                                                                               Ir a pagar
                                                                            </Link>
                                                <div className="tableScroll">
                                                <Table striped bordered hover responsive className='PagosPendientes'>
        <thead>
          <tr>
            <th>Concepto</th>

            <th>Fecha límite de pago</th>
            <th>Cantidad</th>
          </tr>
        </thead>
        <tbody>
          <tr>
          <td>Material didáctico</td>
            <td>30/MARZO/2025</td>
            <td>$300</td>
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


                        <div className="row">
                            <div className="col">
                                <div class="card mt-4" style={{backgroundColor: "#2A007B"}}>
                                    <div class="card-body">
                                        <div className="row">
                                            <div className="col-11">
                                                <span style={{fontSize: 24, color: "white"}}>Próximo evento</span>
                                            </div>
                                            <div className="col-1">
                                                <button className="btnCerrarProxPago">X</button>
                                            </div>
                                        </div>
                                        <div className="card mt-2">
                                            <div className="card-body">
                                               <div className="row">
                                                <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
                                                    <div className="row">
                                                        <div className="col">
                                                           <span style={{fontSize: 36, color: "#339901"}}> Junta de padres de familia</span>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col">
                                                           <span style={{fontSize: 36, color: "#000000"}}>Miercoles </span>
                                                           <span style={{fontSize: 96, color: "#FFCC01"}}>19</span>
                                                           <span style={{fontSize: 36, color: "#000000"}}> de </span>
                                                           <span style={{fontSize: 36, color: "#9747FF"}}>marzo</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6" > 
                                                    <CalendarProxEvento />
                                                </div>
                                               </div>
                                            </div>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                        <AccesosRapidosComponent/>
    
    </>
  )
}





        
                        

                  
                
