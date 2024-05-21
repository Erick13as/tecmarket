import React from 'react';
import './index.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import "./components/Design.css"

import { SignIn, SignUp } from './controllers/UserController';
import { AgregarProducto,EditarProductoAdmin,VerMasCliente,AccederTiendaCliente,AccederTiendaAdmin} from './controllers/ProductoController';
import { CerrarCompra, OrdenesPendientes,OrdenesEntregadas,OrdenesConfirmadas, ListaOrdenes, DetallesOrden,IngresarDireccion,Carrito,FinalizarCompra,DetallesOrdenAdmin,DeliveryMenu,DetallesOrdenDelivery,DetallesOrdenDelivered} from './controllers/CompraController';
import { Notificaciones } from './controllers/NotificacionController';
import { MyMapComponent } from './controllers/MapController';
import { PruebaMapa } from './controllers/PruebaMap';

import "./components/Design.css"

const App = () => {

  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route path='/tecmarket' element={<SignIn />} /> 
        <Route path='/registro' element={<SignUp />} />
        <Route path='/AgregarProducto' element={<AgregarProducto />} />
        <Route path='AccederTiendaCliente/' element={<AccederTiendaCliente />}/>
        <Route path='AccederTiendaAdmin/' element={<AccederTiendaAdmin />}/>
        <Route path="/Carrito" element={<Carrito />} />
        <Route path='/VerMasCliente' element={<VerMasCliente />}  />
        <Route path='/EditarProductoAdmin/:id' element={<EditarProductoAdmin />}  />
        <Route path='/OrdenesPendientes' element={<OrdenesPendientes />}  />
        <Route path='/OrdenesConfirmadas' element={<OrdenesConfirmadas />}  />
        <Route path='/OrdenesEntregadas' element={<OrdenesEntregadas />}  />
        <Route path='/CerrarCompra/:id'element={<CerrarCompra />}  />
        <Route path='/ingresarDireccion' element={<IngresarDireccion />} />
        <Route path='/ComprasRealizadas/:userId'element={<ListaOrdenes />}  />
        <Route path='/finalizarCompra' element={<FinalizarCompra />} />
        <Route path='/Orden/:numeroOrden'element={<DetallesOrden />}  />
        <Route path='/OrdenAdmin/:numeroOrden'element={<DetallesOrdenAdmin />} />
        <Route path='/Notificaciones/:id'element={<Notificaciones />} />
        <Route path='/DeliveryMenu'element={<DeliveryMenu />} />
        <Route path='/OrdenDelivery/:numeroOrden'element={<DetallesOrdenDelivery />} />
        <Route path='/Map/:numeroOrden'element={<MyMapComponent />} />
        <Route path='/MapaP/'element={<PruebaMapa />} />
        <Route path='/OrdenDelivered/:numeroOrden'element={<DetallesOrdenDelivered />} />
      </Routes>
    </div>
    </BrowserRouter>
  )
}


export default App;