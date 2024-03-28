import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../firebase/firebaseConfig";
import {useNavigate} from 'react-router-dom'
import { collection, query, getDocs, where, addDoc } from 'firebase/firestore';
import { db } from '../firebase/firebaseConfig';
import SignInView from '../views/SignInView';
import SignUpView from '../views/SignUpView';

const SignIn = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
  
    const signIn = (e) => {
      e.preventDefault();
      signInWithEmailAndPassword(auth, email, password)
        .then(async (userCredential) => {
          const userQuery = query(collection(db, 'usuario'), where('correo', '==', email));
          const querySnapshot = await getDocs(userQuery);
          querySnapshot.forEach((doc) => {
            const userData = doc.data();
            const rolValue = userData.rol;
    
            // Check the value of rolValue and navigate accordingly
            if (rolValue === 'Admin') {
              navigate('/AccederTiendaAdmin');
            } else {
              navigate('/AccederTiendaCliente', { state: { correo: email } });
            }
          });
        })
        .catch((error) => {
          var errorMessage = document.getElementById('errorLogin');
          errorMessage.style.display = "block";
          errorMessage.textContent = "Correo o contraseña incorrecta";
          document.getElementById('espace').style.display = "none";
        });
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };
    
    const navigateToGallery = () => {
        navigate('/tecmarket');
    };

    const navigateToRegister = () => {
        navigate('/registro');
    };
    
    return (
    <SignInView
        signIn={signIn}
        email={email}
        password={password}
        navigateToGallery={navigateToGallery}
        navigateToRegister={navigateToRegister}
        handleEmailChange={handleEmailChange}
        handlePasswordChange={handlePasswordChange}
    />
    );
}

const SignUp = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confPassword, setconfPassword] = useState("");
    const [name, setName] = useState("");
    const navigate = useNavigate();
  
    const agregarDatos = async () => {
      try {
          // Consulta para obtener el último ID existente
          const querySnapshot = await getDocs(collection(db, "usuario"));
          let lastId = 0;

          querySnapshot.forEach((doc) => {
              const data = doc.data();
              // Asegúrate de que el campo "id" sea un número
              if (!isNaN(data.id)) {
                  const id = parseInt(data.id);
                  if (id > lastId) {
                      lastId = id;
                  }
              }
          });

          // Calcula el nuevo ID
          const newId = (lastId + 1).toString();

          // Agrega un nuevo documento con el nuevo ID
          const docRef = await addDoc(collection(db, "usuario"), {
              id: newId, // Agrega el nuevo ID
              correo: email,
              nombreCompleto: name,
              rol: "Cliente",
          });

          console.log("Document written with ID: ", docRef.id);
      } catch (e) {
          console.error("Error adding document: ", e);
      }
    }
  
    const signUp = (e) => {
      e.preventDefault();
  
      if (password !== confPassword) {
        var errorMessage = document.getElementById('errorLogin');
        errorMessage.style.display = "block";
        errorMessage.textContent = "Las contraseñas no coinciden";
        document.getElementById('espace').style.display = "none";
        return;
      }
  
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          console.log(userCredential);
          agregarDatos();
          navigate('/tecmarket')
        })
        .catch((error) => {
          console.log(error);
          var errorMessage = document.getElementById('errorLogin');
          errorMessage.style.display = "block";
          errorMessage.textContent = "Datos no válidos";
          document.getElementById('espace').style.display = "none";
        });
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleConfPasswordChange = (e) => {
        setconfPassword(e.target.value);
    };

    const handleNameChange = (e) => {
        setName(e.target.value);
    };
    
    const navigateToGallery = () => {
        navigate('/tecmarket');
    };

    const navigateToLogin = () => {
        navigate('/tecmarket');
    };

    return (
      <SignUpView
          email={email}
          signUp={signUp}
          password={password}
          confPassword={confPassword}
          name={name}
          navigateToGallery={navigateToGallery}
          navigateToLogin={navigateToLogin}
          handleEmailChange={handleEmailChange}
          handlePasswordChange={handlePasswordChange}
          handleConfPasswordChange={handleConfPasswordChange}
          handleNameChange={handleNameChange}
      />
      );
  }

export { SignIn, SignUp };