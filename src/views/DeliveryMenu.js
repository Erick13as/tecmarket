import React from 'react';

function DeliveryMenuView(props) {
    const {
      handleNavigate
    } = props;

    return (
      <div className='galeria-container'>
        <form className="formBarra">
          <button onClick={()=>handleNavigate('/AccederTiendaAdmin')} className='botonOA'>Tienda</button>
          <div className="botonBarra-container">
            <button onClick={() => handleNavigate('/tecmarket')} className='botonOA2'>Cerrar sesión</button>
          </div>
        </form>
        <h1>Órdenes</h1>
        <div className='delivery-container'>
          <button onClick={() => handleNavigate('/OrdenesEntregadas')} className="DeliveryButtons" >Órdenes entregadas</button>
          <button onClick={() => handleNavigate('/OrdenesPendientes')} className="DeliveryButtons" >Órdenes pendientes</button>
        </div>
      </div>
    );
  };
  export default DeliveryMenuView;