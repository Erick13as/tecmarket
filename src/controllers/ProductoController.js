import React, { useState, useEffect } from 'react';
import { collection, addDoc, serverTimestamp, query, orderBy, limit, getDocs, onSnapshot, doc, updateDoc, where, deleteDoc, arrayUnion } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { db, storage } from '../firebase/firebaseConfig';
import { useNavigate, useLocation, useParams } from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import VerMasClienteView from '../views/VerMasClienteView';
import AccederTiendaClienteView from '../views/AccederTiendaClienteView'; 

function VerMasCliente() {
  const location = useLocation();
  const [userId, setUserId] = useState(null);
  const email = location.state && location.state.correo;
  const id = location.state && location.state.producto;
  const [productos, setProductos] = useState([]);
  const [product, setProduct] = useState(null);
  const [precio, setPrecio] = useState('');
  const [carrito, setCarrito] = useState([]);
  const [isInCart, setIsInCart] = useState(false);
  const navigate = useNavigate();
  const handleNavigate = (route) => {
    navigate(route);
  };
  

  useEffect(() => {
    const obtenerIdUsuario = async () => {
      const usuarioQuery = query(collection(db, 'usuario'), where('correo', '==', email));
      const usuarioSnapshot = await getDocs(usuarioQuery);

      if (!usuarioSnapshot.empty) {
        usuarioSnapshot.forEach((doc) => {
          // Obtén el valor del atributo 'id' del documento de usuario
          const data = doc.data();
          const idUsuario = data.id;
          setUserId(idUsuario);
        });
      }
    };

    obtenerIdUsuario();

    const q = collection(db, 'productos');

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const products = [];
      snapshot.forEach((doc) => {
        const data = doc.data();
        products.push(data);
      });

      setProductos(products);
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (id) {
      const selectedProduct = productos.find((producto) => producto.id === id);
      setProduct(selectedProduct);
    }
  }, [id, productos]);

  useEffect(() => {
    if (id && email) {
      const carritoCollectionRef = collection(db, 'carrito');
      const q = query(carritoCollectionRef, where('correo', '==', email));
      getDocs(q)
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            const carritoData = doc.data();
            const listaIdCantidadProductos =
              carritoData.listaIdCantidadProductos || [];

            // Verificar si el producto ya está en el carrito
            const productIndex = listaIdCantidadProductos.findIndex(
              (item) => item.id === id
            );
            if (productIndex !== -1) {
              setIsInCart(true);
            }
          });
        })
        .catch((error) => {
          console.error('Error al verificar el producto en el carrito', error);
        });
    }
  }, [id, email]);

  const handleAddToCart = async () => {
    if (product) {
      if (isInCart) {
        return;
      }
      const productQuery = query(collection(db, 'productos'), where('id', '==', id));
      const productSnapshot = await getDocs(productQuery);

      const productData = productSnapshot.docs[0].data();
      const precio = ""+productData.precio;
      setPrecio(precio);
      console.log(precio)
  
      // Primero, consulta la colección 'carrito' para obtener el documento correcto.
      const querySnapshot = await getDocs(query(collection(db, 'carrito'), where('correo', '==', email)));
  
      // Comprueba si existe un documento que cumple con la consulta.
      if (querySnapshot.empty) {
        // Si no existe un documento, puedes crear uno nuevo.
        const newCartDocRef = await addDoc(collection(db, 'carrito'), {
          correo: email,
          listaIdCantidadProductos: [{ id, cantidad: 1, precio }],
        });
        setCarrito([...carrito, product]);
        setIsInCart(true);
      } else {
        // Si existe un documento, obtén su referencia.
        const cartDocRef = querySnapshot.docs[0].ref;
  
        // Actualiza el campo 'listaIdCantidadProductos' utilizando arrayUnion.
        try {
          await updateDoc(cartDocRef, {
            listaIdCantidadProductos: arrayUnion({ id, cantidad: 1, precio }),
          });
  
          setCarrito([...carrito, product]);
          setIsInCart(true);
        } catch (error) {
          console.error('Error al agregar el producto al carrito en la base de datos', error);
        }
      }
    }
  };  

  if (!product) {
    return <div>No se encontró el producto o ocurrió un error.</div>;
  }

  return (
    <VerMasClienteView
        id={id}
        productos={productos}
        product={product}
        carrito={carrito}
        isInCart={isInCart}
        setProductos={setProductos}
        setProduct={setProduct}
        setCarrito={setCarrito}
        setIsInCart={setIsInCart}
        handleAddToCart={handleAddToCart}
        handleNavigate={handleNavigate}
        navigate={navigate}
        email={email}
        userId={userId}
    />
  );
}

function AccederTiendaCliente() {
  const location = useLocation();
  const email = location.state && location.state.correo;
  const [productos, setProductos] = useState([]);
  const [userId, setUserId] = useState(null); // Para almacenar el valor de 'id'
  const navigate = useNavigate();

  useEffect(() => {
    const obtenerIdUsuario = async () => {
      const usuarioQuery = query(collection(db, 'usuario'), where('correo', '==', email));
      const usuarioSnapshot = await getDocs(usuarioQuery);

      if (!usuarioSnapshot.empty) {
        usuarioSnapshot.forEach((doc) => {
          // Obtén el valor del atributo 'id' del documento de usuario
          const data = doc.data();
          const idUsuario = data.id;
          setUserId(idUsuario);
        });
      }
    };

    obtenerIdUsuario();

    // Consulta Firestore para obtener los productos.
    const productosQuery = collection(db, 'productos');
    const productosSnapshot = getDocs(productosQuery);

    productosSnapshot.then((snapshot) => {
      const productList = [];
      snapshot.forEach((doc) => {
        const data = doc.data();
        productList.push(data);
      });

      setProductos(productList);
    });
  }, [email]);

  const handleNavigate = (route) => {
    navigate(route);
  };

  const navigateToCarrito = () => {
    navigate('/Carrito', { state: { correo: email, userId: userId } });
  };

  return (
    <AccederTiendaClienteView
      productos={productos}
      handleNavigate={handleNavigate}
      navigateToCarrito={navigateToCarrito}
      email={email}
      navigate={navigate}
      userId={userId}
    />
  );
}

export {VerMasCliente,AccederTiendaCliente};