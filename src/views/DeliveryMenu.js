import React from 'react';

function DeliveryMenuView(props) {
    const {
      handleNavigate
    } = props;

    return (
      <div className='galeria-container'>
        <form className="formBarra">
          <h1 className="title">TecMarket</h1>
          <div className="botonBarra-container">
            <button onClick={() => handleNavigate('/tecmarket')} className='botonOA2'>Cerrar sesión</button>
          </div>
        </form>
        <h1>Menu</h1>
        <div className='delivery-container'>
          <button onClick={() => handleNavigate('/OrdenesConfirmadas')} className="DeliveryButtons" >Órdenes confirmadas</button>
          <button onClick={() => handleNavigate('/OrdenesEntregadas')} className="DeliveryButtons" >Órdenes entregadas</button>
        </div>
      </div>
    );
  };
  export default DeliveryMenuView;