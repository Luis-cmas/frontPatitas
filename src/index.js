import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider } from "react-redux";//redux se utiliza para usar variables globales en la pagina
import {createStore } from "redux";
import reducer from "./reducers";

const initialState = {
    "usuario" : "",
    "id":"",
    "mascota" : "",
    "empleado": "",
    "sucursal": "",
    "cita": "",
    "producto": "",
    "carrito": []
}
const store = createStore(reducer,initialState);
//es el encargado de crar la aplicacion
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
