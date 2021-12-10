
import './App.css';

import Header from './components/header';
import Carrusel from './components/carrusel';
import TiendaHome from './components/TiendaHome';
import Somos from './components/Somos';
/** para funciones con parametros se pueden poner la etiqueta y en la etiqueta de inicio
 * se agrega el nombre de la variable junto con su valor, siempre entre comillas 
 */
function App() {
  return (
    
    <div className="App">
      <Header></Header>
      <Carrusel></Carrusel>
      <TiendaHome></TiendaHome>
      <Somos></Somos>
    </div>
  );
}

export default App;
