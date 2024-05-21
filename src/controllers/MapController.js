// Importar los módulos necesarios
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
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
  const points = [
    { lat: 9.857058773152545, lng: -83.9124787728454, text: "A1" },
    { lat: 9.856805792524087, lng: -83.91263187853262, text: "A2" },
    { lat: 9.856615664097932, lng: -83.91308481619072, text: "A3" },
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

export { MyMapComponent };
