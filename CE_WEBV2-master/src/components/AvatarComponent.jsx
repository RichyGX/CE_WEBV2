import Avatar from "../../public/Iconos de figma/Avatar1.svg";

function AvatarComponent () {
    return(
        <>
            <div className="row">
                            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4 align-self-center">
                                <span style={{fontSize: 36}}>Bienvenido</span>
                            </div>
                            <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 col-xxl-8">
                            <div className="row justify-content-between">
                <div className="col-9 col-sm-9 col-md-9 col-lg-9 col-xl-9 col-xxl-9 align-self-center text-end"><span id="textNomAlumna" style={{fontSize: 28}} >Bea Santos Florea</span></div>
                <div className="col-3 col-sm-3 col-md-3 col-lg-3 col-xl-3 col-xxl-3"> <img src={Avatar} alt="Avatar"/></div>
            </div>
                            </div>
                        </div>
             
        </>
    )
}

export default AvatarComponent;


