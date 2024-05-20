import React from 'react';
function OrdenesConfirmadasView(props) {
    const {
        ordenes,
        setOrdenes,
        selectedOrden,
        setSelectedOrden,
        handleNavigate
    } = props;
    
    return (
        <div className="pendientes-container">
      <form className="formBarra">
        <button onClick={()=>handleNavigate('/DeliveryMenu')} className='botonOA'>Inicio</button>
        <div className="botonBarra-container">
            <button onClick={() => handleNavigate('/tecmarket')} className='botonOA2'>Cerrar sesión</button>
        </div>
      </form>
      <h1>Lista de Órdenes Pendiente Entrega</h1>
      <ul>
        {ordenes.map((orden) => (
          <li key={orden.id}>
            <p>Número de Orden: {orden.numeroOrden}</p>
            <p>Fecha de Emisión: {orden.fechaEmision}</p>
            <p>ID del Cliente: {orden.idCliente}</p>
            {/* Utiliza Link para enlazar a la página de detalles de la orden */}
            
            <button className="botonImagen2" onClick={() => handleNavigate(`/OrdenAdmin/${orden.numeroOrden}`)}>
                Seleccionar Orden
            </button>
          </li>
        ))}
      </ul>
    </div>
    );
}
export default OrdenesConfirmadasView;