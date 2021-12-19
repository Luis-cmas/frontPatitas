
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
        <Routes>
          <Route exact path="/" element={<div>
            <Header />
            <TiendaHome />
            <Somos />
            <Footer />
          </div>}
          />

          <Route exact path="/Inicio_Sesion" element={<div>
            <Header />
            <Login />
          </div>}
          />
          <Route exact path="/Crear_Cuenta" element={<div>
            <Header />
            <CrearCuenta />
          </div>}
          />
          <Route exact path="/Recuperacion_Contrasena" element={<div>
            <Header/>
            <RecuperacionPass/>
            </div>}
          />
          <Route exact path="/Busqueda" element={<Header />}
          />
          <Route exact path="/Tienda" element={<div>
            <Header/>
            <Tienda />
          </div>}
          />
          <Route exact path="/Crear_Cita" element={<div>
            <Header />
            <CrearCita/>
            </div>}
          />
          <Route exact path="/Sesion" element={<div>
            <Header />
            <SesionUsuario/>
            </div>}
          />
          <Route exact path="/Empleado" element={<div>
            <Header />
            <SesionUsuario/>
            </div>}
          />
          <Route exact path="/Admin" element={<div>
            <Header />
            <SesionUsuario/>
            </div>}
          />
          <Route exact path="/Admin/empleados" element={<div>
            <Header />
            <SesionUsuario/>
            </div>}
          />
          <Route exact path="/Admin/productos" element={<div>
            <Header />
            <SesionUsuario/>
            </div>}
          />

        </Routes>
      </>

    </Router>

  );
}

export default App;
