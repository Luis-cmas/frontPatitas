
import './App.css';

import Header from './components/Header';
//import Carrusel from './components/carrusel';
import TiendaHome from './components/TiendaHome';
import Somos from './components/Somos';
import Footer from './components/Footer';
import Login from './components/Login';
import CrearCuenta from './components/CrearCuenta';
import Tienda from './components/Tienda';
import SesionUsuario from './components/SesionUsuario';
import SesionEmpleado from './components/SesionEmpleado';
import RecuperacionPass from './components/RecuperacionPass';
import CrearCita from './components/CrearCita';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

/** para funciones con parametros se pueden poner la etiqueta y en la etiqueta de inicio
 * se agrega el nombre de la variable junto con su valor, siempre entre comillas 
 */
function App() {
  return (
    <Router>
      <>
      <Header />
        <Routes>
          <Route exact path="/" element={<div>
            <TiendaHome />
            <Somos />
            <Footer />
          </div>}
          />

          <Route exact path="/Inicio_Sesion" element={<div>
            <Login />
          </div>}
          />
          <Route exact path="/Crear_Cuenta" element={<div>
            <CrearCuenta />
          </div>}
          />
          <Route exact path="/Recuperacion_Contrasena" element={<div>
            <RecuperacionPass/>
            </div>}
          />
          <Route exact path="/Busqueda" element={<div></div>}
          />
          <Route exact path="/Tienda" element={<div>
            <Tienda />
          </div>}
          />
          <Route exact path="/Crear_Cita" element={<div></div>}
          />
          <Route exact path="/Sesion_usuario" element={<div>
            <SesionUsuario/>
            </div>}
          />
          <Route exact path="/Sesion_empleado" element={<div>
            <SesionEmpleado/>
            </div>}
          />
          <Route exact path="/Admin" element={<div>
            <SesionUsuario/>
            </div>}
          />
          <Route exact path="/Admin/empleados" element={<div>
            <SesionUsuario/>
            </div>}
          />
          <Route exact path="/Admin/productos" element={<div>
            <SesionUsuario/>
            </div>}
          />

        </Routes>
      </>

    </Router>

  );
}

export default App;
