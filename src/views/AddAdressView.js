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

                        <option value="B1">B1</option>
                        <option value="B2">B2</option>
                        <option value="B3">B3</option>
                        <option value="B4">B4</option>
                        <option value="B5">B5</option>
                        <option value="B6">B6</option>
                        <option value="B7">B7</option>

                        <option value="C1">C1</option>
                        <option value="C2">C2</option>
                        <option value="C3">C3</option>
                        <option value="C4">C4</option>
                        <option value="C5">C5</option>
                        <option value="C6">C6</option>
                        <option value="C9">C9</option>
                        <option value="C10">C10</option>

                        <option value="D1">D1</option>
                        <option value="D2">D2</option>
                        <option value="D3">D3</option>
                        <option value="D4">D4</option>
                        <option value="D5">D5</option>
                        <option value="D6">D6</option>
                        <option value="D7">D7</option>
                        <option value="D8">D8</option>
                        <option value="D9">D9</option>
                        <option value="D10">D10</option>
                        <option value="D11">D11</option>

                        <option value="E1">E1</option>
                        <option value="E2">E2</option>
                        <option value="E4">E4</option>
                        <option value="E5">E5</option>
                        <option value="E7">E7</option>
                        <option value="E8">E8</option>
                        <option value="E9">E9</option>
                        <option value="E10">E10</option>
                        <option value="E11">E11</option>
                        <option value="E12">E12</option>

                        <option value="F1">F1</option>
                        <option value="F2">F2</option>
                        <option value="F3">F3</option>
                        <option value="F4">F4</option>
                        <option value="F5">F5</option>

                        <option value="G1">G1</option>
                        <option value="G2">G2</option>
                        <option value="G3">G3</option>
                        <option value="G4">G4</option>
                        <option value="G5">G5</option>

                        <option value="H1">H1</option>
                        <option value="H2">H2</option>
                        <option value="H3">H3</option>
                        <option value="H4">H4</option>
                        <option value="H5">H5</option>

                        <option value="I1">I1</option>
                        <option value="I2">I2</option>
                        <option value="I3">I3</option>
                        <option value="I4">I4</option>
                        <option value="I5">I5</option>

                        <option value="K1">K1</option>
                        <option value="K2">K2</option>
                        <option value="K3">K3</option>
                        <option value="K4">K4</option>
                        <option value="K5">K5</option>

                        <option value="L1">L1</option>
                        <option value="L2">L2</option>
                        <option value="L3">L3</option>
                        <option value="L4">L4</option>
                        <option value="L5">L5</option>

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