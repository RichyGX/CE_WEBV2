import SidebarElements from "./SidebarElements"
import { useAuth } from "../context/AuthContext";


export const Sidebar = () => {
    const { role } = useAuth();
    return (
        <div className="sidebar">
            <div className="titulo">
                <h1 className='titleSideBar'> Control Escolar</h1>
            </div>
            <div className="rolTitle">
                {role === 'directivos' && (<h4 className="rolTitleSideBar"><strong>DIRECTIVOS</strong></h4>)}
                {role === 'padres_familia' && (<h4 className="rolTitleSideBar"><strong>PADRES</strong></h4>)}

            </div>
            <div className="elementosSideBar">
                <SidebarElements iconName={'Home'} TitleName={'Inicio'} navName={"/home"} />
                {role === 'directivos' && (
                    <>
                        <SidebarElements iconName="child_care" TitleName="Alumnos" navName="/alumnos" />
                        <SidebarElements iconName="group" TitleName="Plantilla" navName="/plantilla" />
                        <SidebarElements iconName="storefront" TitleName="Proveedores" navName="/proveedores" />
                        <SidebarElements iconName="calendar_month" TitleName="Eventos" navName="/eventos" />
                        <SidebarElements iconName="description" TitleName="Documentos" navName="/documentos" />
                        <SidebarElements iconName="payments" TitleName="Balance" navName="/balance" />
                        <SidebarElements iconName="group_add" TitleName="Usuarios" navName="/usuarios" />

                    </>
                )}
                {role === 'padres_familia' && (
                    <>
                        <SidebarElements iconName="key" TitleName="Acceso" navName="/acceso" />
                        <SidebarElements iconName="camera_video" TitleName="Monitoreo" navName="/monitoreo" />
                        <SidebarElements iconName="payments" TitleName="Pagos" navName="/pagos" />
                        <SidebarElements iconName="description" TitleName="Permisos" navName="/permisos" />


                    </>
                )}
                <hr />
                <SidebarElements iconName="person" TitleName="Perfil" navName="/perfil" />
                <SidebarElements iconName="settings" TitleName="Ajustes" navName="/ajustes" />




            </div>
        </div>
    )
}
