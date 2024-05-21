import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../firebase/firebaseConfig';
import { useParams, useNavigate } from 'react-router-dom';
import 'leaflet/dist/leaflet.css';

// Opcional: solucionar problemas de iconos con Webpack
import L from 'leaflet';
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.4/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.4/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.4/images/marker-shadow.png',
});

const MyMapComponent = () => {
  const [direccionEntrega, setDireccionEntrega] = useState('');
  const [direccionEntregaPoint, setDireccionEntregaPoint] = useState(null);
  const { numeroOrden } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchDireccionEntrega = async () => {
      try {
        const q = query(collection(db, 'orden'), where('numeroOrden', '==', numeroOrden));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
          const data = doc.data();
          setDireccionEntrega(data.direccionEntrega);
        });
      } catch (error) {
        console.error('Error fetching direccion entrega:', error);
      }
    };

    fetchDireccionEntrega();
  }, [numeroOrden]);

  useEffect(() => {
    const pointWithDireccionEntrega = points.find(point => point.text === direccionEntrega);
    if (pointWithDireccionEntrega) {
      setDireccionEntregaPoint(pointWithDireccionEntrega);
    }
  }, [direccionEntrega]);

  const points = [
    { lat: 9.857058773152545, lng: -83.9124787728454, text: "A1" },
    { lat: 9.856805792524087, lng: -83.91263187853262, text: "A2" },
    { lat: 9.856615664097932, lng: -83.91308481619072, text: "A3" },
  ];

  return (
    <div className="compra-container">
      <form className="formBarra">
        <button onClick={()=>navigate(`/OrdenDelivery/${numeroOrden}`)} className='botonOA'>Volver</button>
        <div className="botonBarra-container">
            <button onClick={() => navigate('/tecmarket')} className='botonOA2'>Cerrar sesión</button>
        </div>
      </form>
      <MapContainer center={[9.85381101662751, -83.91039810196884]} zoom={17} style={{ height: '80vh', width: '100%' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {direccionEntregaPoint && (
          <Marker position={[direccionEntregaPoint.lat, direccionEntregaPoint.lng]}>
            <Popup>{direccionEntregaPoint.text}</Popup>
          </Marker>
        )}
      </MapContainer>
    </div>
  );
};

export { MyMapComponent };
