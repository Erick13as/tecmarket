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

const MapaDelivery = () => {
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
    { lat: 9.856126341920744, lng: -83.9131891104333, text: "A4" },
    { lat: 9.856886856096086, lng: -83.91286057114608, text: "A5" },
    { lat: 9.857756423817541, lng: -83.91281690847674, text: "A6" },
    { lat: 9.856024332620551, lng: -83.91360562840009, text: "A7" },
    { lat: 9.8570625714663, lng: -83.91174772788176, text: "A8" },
    { lat: 9.855883963543217, lng: -83.91329536245874, text: "A9" },
    { lat: 9.85609936688719, lng: -83.91291576905287, text: "A10" },
    { lat: 9.857729708081507, lng: -83.91241188643565, text: "A11" },
    { lat: 9.857050464353247, lng: -83.91289700607486, text: "A12" },

    { lat: 9.855932849396472, lng: -83.91261358118317, text: "B1" },
    { lat: 9.856147144315447, lng: -83.9125897817144, text: "B2" },
    { lat: 9.85634198694849, lng: -83.91258978172687, text: "B3" },
    { lat: 9.85601221424012, lng: -83.9120596225168, text: "B4" },
    { lat: 9.85634109052129, lng: -83.91192685995343, text: "B5" },
    { lat: 9.856565324161334, lng: -83.9119572056822, text: "B6" },
    { lat: 9.855887160130973, lng: -83.91154661795527, text: "B7" },

    { lat: 9.855697488855153, lng: -83.9131471352159, text: "C1" },
    { lat: 9.854984470335054, lng: -83.91396166330276, text: "C2" },
    { lat: 9.854917346868367, lng: -83.91265002301671, text: "C3" },
    { lat: 9.85506178847281, lng: -83.91323193164126, text: "C4" },
    { lat: 9.855250176049994, lng: -83.9134206881506, text: "C5" },
    { lat: 9.855207197776076, lng: -83.91357621001056, text: "C6" },
    { lat: 9.8554524668987, lng: -83.91332770879968, text: "C9" },
    { lat: 9.855469284472303, lng: -83.91289148894863, text: "C10" },

    { lat: 9.855685141633888, lng: -83.91231218734492, text: "D1" },
    { lat: 9.855634859575867, lng: -83.91184011147593, text: "D2" },
    { lat: 9.855559436474435, lng: -83.91135846650148, text: "D3" },
    { lat: 9.855493441246557, lng: -83.91090552884341, text: "D4" },
    { lat: 9.855484013355776, lng: -83.91230899764311, text: "D5" },
    { lat: 9.855396019695533, lng: -83.91201554507589, text: "D6" },
    { lat: 9.85528288495501, lng: -83.91154984861055, text: "D7" },
    { lat: 9.855163464909012, lng: -83.91092785675613, text: "D8" },
    { lat: 9.855245173366196, lng: -83.91062483508347, text: "D9" },
    { lat: 9.854915196780274, lng: -83.91137441501058, text: "D10" },
    { lat: 9.85459464778068, lng: -83.9116519190687, text: "D11" },

    { lat: 9.857011328177187, lng: -83.91080664804586, text: "E1" },
    { lat: 9.85693904800703, lng: -83.91038241770416, text: "E2" },
    { lat: 9.856128251959221, lng: -83.90944145560506, text: "E4" },
    { lat: 9.855864271421583, lng: -83.90769987830875, text: "E5" },
    { lat: 9.856533650240046, lng: -83.91078432009178, text: "E7" },
    { lat: 9.85747643498275, lng: -83.91152433091342, text: "E8" },
    { lat: 9.856832199033528, lng: -83.90973490819383, text: "E9" },
    { lat: 9.855786636402494, lng: -83.90838881732603, text: "E10" },
    { lat: 9.856918576641789, lng: -83.90914940487907, text: "E11" },
    { lat: 9.856726280678242, lng: -83.90915753545423, text: "E12" },

    { lat: 9.855134916387438,   lng: -83.90951244034379, text: "F1" },
    { lat: 9.85526465476523, lng: -83.90905558601027, text: "F2" },
    { lat: 9.854952223483213, lng: -83.90911202095735, text: "F3" },
    { lat: 9.855238177549412, lng: -83.90859873167675, text: "F4" },
    { lat: 9.854888678101483, lng: -83.9086202307042, text: "F5" },

    { lat: 9.8543847342416,   lng: -83.9091217332664, text: "G1" },
    { lat: 9.854496275624161, lng: -83.90874166528012, text: "G2" },
    { lat: 9.854177585859649, lng: -83.90875244735065, text: "G3" },
    { lat: 9.854182897358244, lng: -83.90834542418807, text: "G4" },
    { lat: 9.854145716866263, lng: -83.90796266068415, text: "G5" },

    { lat: 9.853070086904967, lng: -83.90916461131866, text: "H1" },
    { lat: 9.853487040687279, lng: -83.90966058656628, text: "H2" },
    { lat: 9.853574680587224, lng: -83.91002448144903, text: "H3" },
    { lat: 9.85321084206238,  lng: -83.90969562829572, text: "H4" },
    { lat: 9.853688878084611, lng: -83.91056531006802, text: "H5" },

    { lat: 9.853737405078794, lng: -83.91199613304221, text: "I1" },
    { lat: 9.853634721577711, lng: -83.911760103194, text: "I2" },
    { lat: 9.853646801991264, lng: -83.91152713866852, text: "I3" },
    { lat: 9.853574319503302, lng: -83.91235171047586, text: "I4" },
    { lat: 9.85372230456593,  lng: -83.91103055639049, text: "I5" },

    { lat: 9.855010324247054, lng: -83.90718786736136, text: "K1" },
    { lat: 9.854248910791732, lng: -83.90714330515108, text: "K2" },
    { lat: 9.854275440610566, lng: -83.90675093891754, text: "K3" },
    { lat: 9.853934342777201, lng: -83.90705483041215, text: "K4" },
    { lat: 9.853399955462445, lng: -83.90708560423438, text: "K5" },

    { lat: 9.850004246495903, lng: -83.91117134318621, text: "L1" },
    { lat: 9.849999532472111, lng: -83.9106753445281, text: "L2" },
    { lat: 9.849691549438504, lng: -83.91081512388762, text: "L3" },
    { lat: 9.849980261337395, lng: -83.91023241397976, text: "L4" },
    { lat: 9.849789328323244, lng: -83.91175990068535, text: "L5" },
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

const MapaDelivered = () => {
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
    { lat: 9.856126341920744, lng: -83.9131891104333, text: "A4" },
    { lat: 9.856886856096086, lng: -83.91286057114608, text: "A5" },
    { lat: 9.857756423817541, lng: -83.91281690847674, text: "A6" },
    { lat: 9.856024332620551, lng: -83.91360562840009, text: "A7" },
    { lat: 9.8570625714663, lng: -83.91174772788176, text: "A8" },
    { lat: 9.855883963543217, lng: -83.91329536245874, text: "A9" },
    { lat: 9.85609936688719, lng: -83.91291576905287, text: "A10" },
    { lat: 9.857729708081507, lng: -83.91241188643565, text: "A11" },
    { lat: 9.857050464353247, lng: -83.91289700607486, text: "A12" },

    { lat: 9.855932849396472, lng: -83.91261358118317, text: "B1" },
    { lat: 9.856147144315447, lng: -83.9125897817144, text: "B2" },
    { lat: 9.85634198694849, lng: -83.91258978172687, text: "B3" },
    { lat: 9.85601221424012, lng: -83.9120596225168, text: "B4" },
    { lat: 9.85634109052129, lng: -83.91192685995343, text: "B5" },
    { lat: 9.856565324161334, lng: -83.9119572056822, text: "B6" },
    { lat: 9.855887160130973, lng: -83.91154661795527, text: "B7" },

    { lat: 9.855697488855153, lng: -83.9131471352159, text: "C1" },
    { lat: 9.854984470335054, lng: -83.91396166330276, text: "C2" },
    { lat: 9.854917346868367, lng: -83.91265002301671, text: "C3" },
    { lat: 9.85506178847281, lng: -83.91323193164126, text: "C4" },
    { lat: 9.855250176049994, lng: -83.9134206881506, text: "C5" },
    { lat: 9.855207197776076, lng: -83.91357621001056, text: "C6" },
    { lat: 9.8554524668987, lng: -83.91332770879968, text: "C9" },
    { lat: 9.855469284472303, lng: -83.91289148894863, text: "C10" },

    { lat: 9.855685141633888, lng: -83.91231218734492, text: "D1" },
    { lat: 9.855634859575867, lng: -83.91184011147593, text: "D2" },
    { lat: 9.855559436474435, lng: -83.91135846650148, text: "D3" },
    { lat: 9.855493441246557, lng: -83.91090552884341, text: "D4" },
    { lat: 9.855484013355776, lng: -83.91230899764311, text: "D5" },
    { lat: 9.855396019695533, lng: -83.91201554507589, text: "D6" },
    { lat: 9.85528288495501, lng: -83.91154984861055, text: "D7" },
    { lat: 9.855163464909012, lng: -83.91092785675613, text: "D8" },
    { lat: 9.855245173366196, lng: -83.91062483508347, text: "D9" },
    { lat: 9.854915196780274, lng: -83.91137441501058, text: "D10" },
    { lat: 9.85459464778068, lng: -83.9116519190687, text: "D11" },

    { lat: 9.857011328177187, lng: -83.91080664804586, text: "E1" },
    { lat: 9.85693904800703, lng: -83.91038241770416, text: "E2" },
    { lat: 9.856128251959221, lng: -83.90944145560506, text: "E4" },
    { lat: 9.855864271421583, lng: -83.90769987830875, text: "E5" },
    { lat: 9.856533650240046, lng: -83.91078432009178, text: "E7" },
    { lat: 9.85747643498275, lng: -83.91152433091342, text: "E8" },
    { lat: 9.856832199033528, lng: -83.90973490819383, text: "E9" },
    { lat: 9.855786636402494, lng: -83.90838881732603, text: "E10" },
    { lat: 9.856918576641789, lng: -83.90914940487907, text: "E11" },
    { lat: 9.856726280678242, lng: -83.90915753545423, text: "E12" },

    { lat: 9.855134916387438,   lng: -83.90951244034379, text: "F1" },
    { lat: 9.85526465476523, lng: -83.90905558601027, text: "F2" },
    { lat: 9.854952223483213, lng: -83.90911202095735, text: "F3" },
    { lat: 9.855238177549412, lng: -83.90859873167675, text: "F4" },
    { lat: 9.854888678101483, lng: -83.9086202307042, text: "F5" },

    { lat: 9.8543847342416,   lng: -83.9091217332664, text: "G1" },
    { lat: 9.854496275624161, lng: -83.90874166528012, text: "G2" },
    { lat: 9.854177585859649, lng: -83.90875244735065, text: "G3" },
    { lat: 9.854182897358244, lng: -83.90834542418807, text: "G4" },
    { lat: 9.854145716866263, lng: -83.90796266068415, text: "G5" },

    { lat: 9.853070086904967, lng: -83.90916461131866, text: "H1" },
    { lat: 9.853487040687279, lng: -83.90966058656628, text: "H2" },
    { lat: 9.853574680587224, lng: -83.91002448144903, text: "H3" },
    { lat: 9.85321084206238,  lng: -83.90969562829572, text: "H4" },
    { lat: 9.853688878084611, lng: -83.91056531006802, text: "H5" },

    { lat: 9.853737405078794, lng: -83.91199613304221, text: "I1" },
    { lat: 9.853634721577711, lng: -83.911760103194, text: "I2" },
    { lat: 9.853646801991264, lng: -83.91152713866852, text: "I3" },
    { lat: 9.853574319503302, lng: -83.91235171047586, text: "I4" },
    { lat: 9.85372230456593,  lng: -83.91103055639049, text: "I5" },

    { lat: 9.855010324247054, lng: -83.90718786736136, text: "K1" },
    { lat: 9.854248910791732, lng: -83.90714330515108, text: "K2" },
    { lat: 9.854275440610566, lng: -83.90675093891754, text: "K3" },
    { lat: 9.853934342777201, lng: -83.90705483041215, text: "K4" },
    { lat: 9.853399955462445, lng: -83.90708560423438, text: "K5" },

    { lat: 9.850004246495903, lng: -83.91117134318621, text: "L1" },
    { lat: 9.849999532472111, lng: -83.9106753445281, text: "L2" },
    { lat: 9.849691549438504, lng: -83.91081512388762, text: "L3" },
    { lat: 9.849980261337395, lng: -83.91023241397976, text: "L4" },
    { lat: 9.849789328323244, lng: -83.91175990068535, text: "L5" },
  ];

  return (
    <div className="compra-container">
      <form className="formBarra">
        <button onClick={()=>navigate(`/OrdenDelivered/${numeroOrden}`)} className='botonOA'>Volver</button>
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

export { MapaDelivery, MapaDelivered };
