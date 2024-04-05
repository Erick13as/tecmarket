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

                        <option value="B1">B1</option>
                        <option value="B2">B2</option>
                        <option value="B3">B3</option>
                        <option value="B4">B4</option>
                        <option value="B5">B5</option>
                        <option value="B6">B6</option>
                        <option value="B7">B7</option>
                        <option value="B8">B8</option>
                        <option value="B9">B9</option>
                        <option value="B10">B10</option>
                        <option value="B11">B11</option>
                        <option value="B12">B12</option>

                        <option value="C1">C1</option>
                        <option value="C2">C2</option>
                        <option value="C3">C3</option>
                        <option value="C4">C4</option>
                        <option value="C5">C5</option>
                        <option value="C6">C6</option>
                        <option value="C7">C7</option>
                        <option value="C8">C8</option>
                        <option value="C9">C9</option>
                        <option value="C10">C10</option>
                        <option value="C11">C11</option>
                        <option value="C12">C12</option>
                        <option value="C13">C13</option>
                        <option value="C14">C14</option>

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
                        <option value="D12">D12</option>
                        <option value="D13">D13</option>

                        <option value="E1">E1</option>
                        <option value="E2">E2</option>
                        <option value="E3">E3</option>
                        <option value="E4">E4</option>
                        <option value="E5">E5</option>
                        <option value="E6">E6</option>
                        <option value="E7">E7</option>
                        <option value="E8">E8</option>
                        <option value="E9">E9</option>
                        <option value="E10">E10</option>
                        <option value="E11">E11</option>
                        <option value="E12">E12</option>
                        <option value="E13">E13</option>
                        <option value="E14">E14</option>
                        <option value="E15">E15</option>
                        <option value="E16">E16</option>
                        <option value="E17">E17</option>
                        <option value="E18">E18</option>
                        <option value="E19">E19</option>
                        <option value="E20">E20</option>
                        <option value="E21">E21</option>

                        <option value="F1">F1</option>
                        <option value="F2">F2</option>
                        <option value="F3">F3</option>
                        <option value="F4">F4</option>
                        <option value="F5">F5</option>
                        <option value="F6">F6</option>
                        <option value="F7">F7</option>
                        <option value="F8">F8</option>
                        <option value="F9">F9</option>
                        <option value="F10">F10</option>
                        <option value="F11">F11</option>

                        <option value="G1">G1</option>
                        <option value="G2">G2</option>
                        <option value="G3">G3</option>
                        <option value="G4">G4</option>
                        <option value="G5">G5</option>
                        <option value="G6">G6</option>
                        <option value="G7">G7</option>
                        <option value="G8">G8</option>
                        <option value="G9">G9</option>
                        <option value="G10">G10</option>
                        <option value="G11">G11</option>
                        <option value="G12">G12</option>
                        <option value="G13">G13</option>
                        <option value="G14">G14</option>
                        <option value="G15">G15</option>
                        <option value="G16">G16</option>
                        <option value="G17">G17</option>
                        <option value="G18">G18</option>
                        <option value="G19">G19</option>
                        <option value="G20">G20</option>

                        <option value="H1">H1</option>
                        <option value="H2">H2</option>
                        <option value="H3">H3</option>
                        <option value="H4">H4</option>
                        <option value="H5">H5</option>
                        <option value="H6">H6</option>
                        <option value="H7">H7</option>
                        <option value="H8">H8</option>
                        <option value="H9">H9</option>
                        <option value="H10">H10</option>
                        <option value="H11">H11</option>
                        <option value="H12">H12</option>
                        <option value="H13">H13</option>
                        <option value="H14">H14</option>
                        <option value="H15">H15</option>
                        <option value="H16">H16</option>

                        <option value="I1">I1</option>
                        <option value="I2">I2</option>
                        <option value="I3">I3</option>
                        <option value="I4">I4</option>
                        <option value="I5">I5</option>
                        <option value="I6">I6</option>
                        <option value="I7">I7</option>
                        <option value="I8">I8</option>
                        <option value="I9">I9</option>
                        <option value="I10">I10</option>
                        <option value="I11">I11</option>

                        <option value="J1">J1</option>
                        <option value="J2">J2</option>
                        <option value="J3">J3</option>
                        <option value="J4">J4</option>
                        <option value="J5">J5</option>
                        <option value="J6">J6</option>
                        <option value="J7">J7</option>
                        <option value="J8">J8</option>

                        <option value="K1">K1</option>
                        <option value="K2">K2</option>
                        <option value="K3">K3</option>
                        <option value="K4">K4</option>
                        <option value="K5">K5</option>
                        <option value="K6">K6</option>
                        <option value="K7">K7</option>
                        <option value="K8">K8</option>
                        <option value="K9">K9</option>

                        <option value="L1">L1</option>
                        <option value="L2">L2</option>
                        <option value="L3">L3</option>
                        <option value="L4">L4</option>
                        <option value="L5">L5</option>
                        <option value="L6">L6</option>
                        <option value="L7">L7</option>
                        <option value="L8">L8</option>

                        <option value="M1">M1</option>
                        <option value="M2">M2</option>
                        <option value="M3">M3</option>
                        <option value="M4">M4</option>
                        <option value="M5">M5</option>
                        <option value="M6">M6</option>
                        <option value="M7">M7</option>
                        <option value="M8">M8</option>
                        <option value="M9">M9</option>
                        <option value="M10">M10</option>
                        <option value="M11">M11</option>
                        <option value="M12">M12</option>
                        <option value="M13">M13</option>
                        <option value="M14">M14</option>
                        <option value="M15">M15</option>
                        <option value="M16">M16</option>

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