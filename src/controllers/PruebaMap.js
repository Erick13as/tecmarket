// Importar los módulos necesarios
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { collection, addDoc, serverTimestamp, query, getDocs, doc, updateDoc, where, deleteDoc, getDoc } from 'firebase/firestore';
import { db, storage, analytics, logEvent  } from '../firebase/firebaseConfig';
import { useNavigate, useLocation, useParams } from 'react-router-dom';
import 'leaflet/dist/leaflet.css';

// Opcional: solucionar problemas de iconos con Webpack
import L from 'leaflet';
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.4/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.4/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.4/images/marker-shadow.png',
});

const PruebaMapa = () => {
  const { numeroOrden } = useParams();
  const points = [
    { lat: 9.857058773152545, lng: -83.9124787728454, text: "A1" },
    { lat: 9.856805792524087, lng: -83.91263187853262, text: "A2" },
    { lat: 9.856615664097932, lng: -83.91308481619072, text: "A3" },
    { lat: 9.856126341920744, lng: -83.9131891104333, text: "A4" },
    { lat: 9.856886856096086, lng: -83.91286057114608, text: "A5" },
    { lat: 9.857756423817541, lng: -83.91281690847674, text: "A6" },
    { lat: 9.856024332620551, lng: -83.91360562840009, text: "A7" },
    { lat: 9.8570625714663, lng: -83.91174772788176, text: "A8" },
    { lat: 9.855883963543217, lng: -83.91329536245874, text: "A9" },
    { lat: 9.85609936688719, lng: -83.91291576905287, text: "A10" },
    { lat: 9.857729708081507, lng: -83.91241188643565, text: "A11" },
  ];

  return (
    <MapContainer center={[9.85381101662751, -83.91039810196884]} zoom={17} style={{ height: '100vh', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {points.map((point, idx) => (
        <Marker key={idx} position={[point.lat, point.lng]}>
          <Popup>{point.text}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export { PruebaMapa };