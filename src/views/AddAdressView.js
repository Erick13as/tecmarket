function IngresarDireccionView(props) {
    const {
        handleContinuar,
        navigate,
        handleEdificioChange,
        edificioSeleccionado,
        telefono,
        aula,
        detalles,
        setDetalles,
        email,
        setTelefono,
        setAula

    } = props;

    return (
        <div className='eliminarCategoria-container'>
            <form className='formTopOA'>
                <div>
                    <button onClick={() => navigate('/AccederTiendaCliente', { state: { correo: email } })} className='botonOA'>Tienda</button>     
                </div>
                <div className="botonBarra-container">
                    <button onClick={() => navigate('/tecmarket')} className='botonOA2'>Cerrar sesión</button>
                </div>
            </form>

            <form className='formCCC'>
                <div className='centrar'>
                    <h3 className='text'>Dirección de Envío</h3>

                    <h4 className='text'>Número de Teléfono:</h4>
                    <div>
                        <textarea
                            className="textBox4 textarea-detalles"
                            id="telefono"
                            value={telefono}
                            onChange={(e) => setTelefono(e.target.value)}
                            placeholder="Ingrese el número."
                        ></textarea>
                    </div>
                    
                    <div className='select-container'>
                    <label htmlFor='categorySelect'></label>
                    </div>
                    <h4 className='text'>Seleccione el edificio:</h4>
                    <div>
                        <select onChange={handleEdificioChange} value={edificioSeleccionado} >
                        <option value="">Seleccione un edificio.</option>
                        <option value="A1">A1</option>
                        <option value="A2">A2</option>
                        <option value="A3">A3</option>
                        <option value="A4">A4</option>
                        <option value="A5">A5</option>
                        <option value="A6">A6</option>
                        <option value="A7">A7</option>
                        <option value="A8">A8</option>
                        <option value="A9">A9</option>
                        <option value="A10">A10</option>
                        <option value="A11">A11</option>
                        <option value="A12">A12</option>
                        <option value="A13">A13</option>

                        <option value="A1">A1</option>
                        <option value="A1">A1</option>
                        <option value="A1">A1</option>
                        <option value="A1">A1</option>
                        <option value="A1">A1</option>
                        <option value="A1">A1</option>
                        <option value="A1">A1</option>
                        <option value="A1">A1</option>
                        <option value="A1">A1</option>
                        <option value="A1">A1</option>
                        <option value="A1">A1</option>

                        </select>

                    </div>

                    <h4 className='text'>Número de Aula:</h4>
                    <div>
                        <textarea
                            className="textBox4 textarea-detalles"
                            id="aula"
                            value={aula}
                            onChange={(e) => setAula(e.target.value)}
                            placeholder="Ingrese el # aula."
                        ></textarea>
                    </div>

                    <h4 className='text'>Detalles adicionales:</h4>
                    <div>
                        <textarea
                            className="textBox3 textarea-detalles"
                            id="detalles"
                            value={detalles}
                            onChange={(e) => setDetalles(e.target.value)}
                            placeholder="Ingrese los detalles adicionales"
                        ></textarea>
                    </div>

                    <div>
                        <button onClick={handleContinuar} className='botonOOA'>
                            Continuar
                        </button>
                    </div>
                </div>
            </form>
        </div>

    );

};

export default IngresarDireccionView;