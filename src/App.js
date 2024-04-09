import React from 'react';
import './index.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import "./components/Design.css"

import { SignIn, SignUp } from './controllers/UserController';
import { VerMasCliente,AccederTiendaCliente} from './controllers/ProductoController';
import { ListaOrdenes, DetallesOrden,IngresarDireccion,Carrito,FinalizarCompra} from './controllers/CompraController';

import "./components/Design.css"


const App = () => {

  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route path='/tecmarket' element={<SignIn />} /> 
        <Route path='/registro' element={<SignUp />} />
        <Route path='AccederTiendaCliente/' element={<AccederTiendaCliente />}/>
        <Route path="/Carrito" element={<Carrito />} />
        <Route path='/VerMasCliente' element={<VerMasCliente />}  />
        <Route path='/ingresarDireccion' element={<IngresarDireccion />} />
        <Route path='/ComprasRealizadas/:userId'element={<ListaOrdenes />}  />
        <Route path='/finalizarCompra' element={<FinalizarCompra />} />
        <Route path='/Orden/:numeroOrden'element={<DetallesOrden />}  />
      </Routes>
    </div>
    </BrowserRouter>
  )
}


export default App;