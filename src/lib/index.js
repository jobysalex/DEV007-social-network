/* eslint-disable max-len */
// aqui exportaras las funciones que necesites
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../Firebase.js';

export const crearUsuarioConCorreoYContraseña = (email, contraseña) => createUserWithEmailAndPassword(auth, email, contraseña);

// con esto se loguea un usuario ya creado
// export const iniciar = getAuth();
// signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
//   const user = userCredential.user;
// });
