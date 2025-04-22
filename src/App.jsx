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




const App = () => {
    return (
        <AuthProvider>
            <Routes>
                <Route path='/' element={<Login />}></Route>
                <Route path='/home' element={<PrivateRoute allowedRoles={['directivos', 'padres_familia']}> <Home /> </PrivateRoute>}></Route>
                <Route path='/alumnos' element={<PrivateRoute allowedRoles={['directivos']}> <Alumnos /> </PrivateRoute>}> </Route>
                <Route path='/plantilla' element={<PrivateRoute allowedRoles={['directivos']}> <Plantilla /> </PrivateRoute>}> </Route>
                <Route path='/proveedores' element={<PrivateRoute allowedRoles={['directivos']}> <Proveedores /> </PrivateRoute>}> </Route>

                <Route path="/unauthorized" element={<Unauthorized />} />

            </Routes>
        </AuthProvider>




    )
}

export default App