import React from 'react';
import { Carousel } from 'react-responsive-carousel';

function AgregarProductoView(props) {
    const {
        productName,
        productBrand,
        productDescription,
        productPrice,
        productQuantity,
        productImage,
        uploading,
        errorText,
        handleImageChange,
        handleUpload,
        handleNavigate,
        setProductName,
        setProductBrand,
        setProductDescription,
        setProductPrice,
        setProductQuantity,
    } = props;
    
return (
    <div className="main-containerProduct">
      
      <form className="formBarra">
        <button onClick={()=>handleNavigate('/AccederTiendaAdmin')} className='botonOA'>Tienda</button>
        <div className="botonBarra-container">
            <button onClick={() => handleNavigate('/OrdenesPendientes')} className='botonOA2'>Gestión Ordenes</button>
            <button onClick={() => handleNavigate('/tecmarket')} className='botonOA2'>Cerrar sesión</button>
        </div>
      </form>
      <div className="subir_producto-container">
        <form className="formUploadProducto">
          <h1 className="titleSubirProducto">Nuevo Producto</h1>
          <div className="input-containerProducto">
            <label htmlFor="productName">Nombre:</label>
            <input
              className="textBoxUploadProducto"
              type="text"
              placeholder="Nombre del Producto"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
            />
          </div>
          <div className="input-containerProducto">
            <label htmlFor="productDescription">Descripción:</label>
            <textarea
              className="textBoxUploadProducto"
              placeholder="Descripción del Producto"
              value={productDescription}
              onChange={(e) => setProductDescription(e.target.value)}
            />
          </div>
          <div className="input-containerProducto">
            <label htmlFor="productBrand">Marca:</label>
            <input
              className="textBoxUploadProducto"
              type="text"
              placeholder="Marca del Producto"
              value={productBrand}
              onChange={(e) => setProductBrand(e.target.value)}
            />
          </div>
          <div className="input-containerProducto">
            <label htmlFor="productPrice">Precio:</label>
            <input
              className="textBoxUploadProducto"
              type="number"
              placeholder="Precio"
              value={productPrice}
              onChange={(e) => setProductPrice(e.target.value)}
            />
          </div>
          <div className="input-containerProducto">
            <label htmlFor="productCantidad">Cantidad disponible:</label>
            <input
              className="textBoxUploadProducto"
              type="number"
              placeholder="Cantidad"
              value={productQuantity}
              onChange={(e) => setProductQuantity(e.target.value)}
            />
          </div>
          <input type="file" accept="imagen/*" onChange={handleImageChange} />
          <div className="image-preview">
            {productImage && <img src={URL.createObjectURL(productImage)} alt="Vista previa de la imagen" />}
          </div>
          <h3 className="messageProducto">{errorText}</h3>
        </form>
        <button onClick={handleUpload} disabled={uploading} className="botonSubirProducto">
          Subir Producto
        </button>
        {uploading && <p>Subiendo producto...</p>}
      </div>
    </div>
  );
}

export default AgregarProductoView;