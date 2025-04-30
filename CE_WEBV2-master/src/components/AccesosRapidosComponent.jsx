import { Link } from "react-router-dom";



function AccesosRapidosComponent () {
    return(
        <>
         <div className="row">
                            <div className="col-sm-12 col.md-4 col-lg-4 col-xl-4 col-xxl-4">
                                <div class="card mt-3 text-center">
                                <Link to="/tareas" type="button" class="btn btn-outline-secondary" style={{ textDecoration: 'none'}} >
                                    <div class="card-body">
                                        <div>
                                        <img src="public/iconos de figma/Tareas.png" alt="Tareas" style={{ width: "80px", height: "auto" }} />
                                        </div>
                                        <div>
                                            <span>Tareas</span>
                                        </div>
                                    </div>
                                    </Link>
                                </div>
                            </div>


                            <div className="col-sm-12 col.md-4 col-lg-4 col-xl-4 col-xxl-4">
                            <div class="card mt-3 text-center">
                                <Link to="/accesos" type="button" class="btn btn-outline-secondary" style={{ textDecoration: 'none'}} >
                                    <div class="card-body">
                                        <div>
                                        <img src="public/iconos de figma/Acceso.png" alt="Acceso" style={{ width: "80px", height: "auto" }} />
                                        </div>
                                        <div>
                                            <span>Acceso</span>
                                        </div>
                                    </div>
                                    </Link>
                                </div>
                            </div>
                            <div className="col-sm-12 col.md-4 col-lg-4 col-xl-4 col-xxl-4">
                            <div class="card mt-3 text-center">
                                <Link to="/permisos" type="button" class="btn btn-outline-secondary" style={{ textDecoration: 'none'}} >
                                    <div class="card-body">
                                        <div>
                                        <img src="public/iconos de figma/Permisos.png" alt="Permisos" style={{ width: "80px", height: "auto" }} />
                                        </div>
                                        <div>
                                            <span>Permisos</span>
                                        </div>
                                    </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-12 col.md-4 col-lg-4 col-xl-4 col-xxl-4">
                                <div class="card mt-3 text-center">
                                 <Link to="/eventos" type="button" class="btn btn-outline-secondary" style={{ textDecoration: 'none'}} >
                                    <div class="card-body">
                                        <div>
                                        <img src="public/iconos de figma/Eventos.png" alt="Eventos" style={{ width: "80px", height: "auto" }} />
                                        </div>
                                        <div>
                                            <span>Eventos</span>
                                        </div>
                                    </div>
                                    </Link>
                                </div>
                            </div>
                            <div className="col-sm-12 col.md-4 col-lg-4 col-xl-4 col-xxl-4">
                            
                            <div class="card mt-3 text-center">
                            <Link to="/galeria" type="button" class="btn btn-outline-secondary" style={{ textDecoration: 'none'}} >
                                    <div class="card-body">                           
                                        <div>
                                            <img src="public/iconos de figma/Galeria.png" alt="Galeria" style={{ width: "80px", height: "auto" }} />
                                        </div>
                                        <div>
                                            <span>Galeria</span>
                                        </div>
                                    </div>
                            </Link>

                                </div>

                            </div>
                            <div className="col-sm-12 col.md-4 col-lg-4 col-xl-4 col-xxl-4">
                            <div class="card mt-3 text-center">
                            <Link to="/pagos" type="button" class="btn btn-outline-secondary" style={{ textDecoration: 'none'}} >

                                    <div class="card-body">
                                        <div>
                                        <img src="public/iconos de figma/Pagos.png" alt="Pagos" style={{ width: "80px", height: "auto" }} />
                                        </div>
                                        <div>
                                            <span>Pagos</span>
                                        </div>
                                    </div>
                            </Link>

                                </div>
                            </div>
                        </div>
        </>
    )
}

export default AccesosRapidosComponent;