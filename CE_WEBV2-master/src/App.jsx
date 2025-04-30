import React from 'react';
import { Routes, Route } from "react-router-dom";
import "./styles.css";
import Login from './files/general/Login';
import { Home } from './files/general/Home';
import { Alumnos } from './files/general/Alumnos';
import { Plantilla } from './files/general/Plantilla';
import { Proveedores } from './files/general/Proveedores';
import Unauthorized from './files/general/Unauthorized';
import { AuthProvider } from './context/AuthContext';
import PrivateRoute from './context/PrivateRoute';
import { Acceso } from './files/padres/Acceso';
import { Monitoreo } from './files/padres/Monitoreo';
import { Pagos } from './files/padres/Pagos';
import { Permisos } from './files/padres/Permisos';
import {Perfil} from './files/padres/Perfil';
import {Ajustes} from './files/padres/Ajustes';
import {Calendario} from './files/padres/Calendario';






const App = () => {
    return (
        <AuthProvider>
            <Routes>
                <Route path='/' element={<Login />}></Route>
                <Route path='/home' element={<PrivateRoute allowedRoles={['directivos', 'padres_familia']}> <Home /> </PrivateRoute>}></Route>
                <Route path='/alumnos' element={<PrivateRoute allowedRoles={['directivos']}> <Alumnos /> </PrivateRoute>}> </Route>
                <Route path='/plantilla' element={<PrivateRoute allowedRoles={['directivos']}> <Plantilla /> </PrivateRoute>}> </Route>
                <Route path='/proveedores' element={<PrivateRoute allowedRoles={['directivos']}> <Proveedores /> </PrivateRoute>}> </Route>

                <Route path='/acceso' element={<PrivateRoute allowedRoles={['padres_familia']}> <Acceso/> </PrivateRoute>}></Route>
                <Route path='/calendario' element={<PrivateRoute allowedRoles={['padres_familia']}> <Calendario/> </PrivateRoute>}></Route>
                <Route path='/monitoreo' element={<PrivateRoute allowedRoles={['padres_familia']}> <Monitoreo/> </PrivateRoute>}></Route>
                <Route path='/pagos' element={<PrivateRoute allowedRoles={['padres_familia']}> <Pagos/> </PrivateRoute>}></Route>
                <Route path='/permisos' element={<PrivateRoute allowedRoles={['padres_familia']}> <Permisos/> </PrivateRoute>}></Route>
                <Route path='/perfil' element={<PrivateRoute allowedRoles={['padres_familia']}> <Perfil/> </PrivateRoute>}></Route>
                <Route path='/ajustes' element={<PrivateRoute allowedRoles={['padres_familia']}> <Ajustes/> </PrivateRoute>}></Route>
                <Route path="/unauthorized" element={<Unauthorized />} />
            </Routes>
        </AuthProvider>
    )
}

export default App