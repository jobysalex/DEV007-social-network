// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithPopup,
} from 'firebase/auth';
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  getDoc,
  deleteDoc,
  doc,
  updateDoc,
  } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDSOGg0XwGEFGCZEwnyaMopX8zyrHPlk_A',
  authDomain: 'cocinemos-juntos.firebaseapp.com',
  projectId: 'cocinemos-juntos',
  storageBucket: 'cocinemos-juntos.appspot.com',
  messagingSenderId: '853852150690',
  appId: '1:853852150690:web:bb9be5b357b688ee9830fb',
  measurementId: 'G-PRMN0GBXC5',
};
// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// funcion para autenticarse
export const auth = getAuth(app);
// export const db = gestFirestore(app);

// funcion registrarse secion con mail y password
export function crearUsuarioConCorreoYContraseña(email, password) {
  return createUserWithEmailAndPassword(auth, email, password);
}

// funcion iniciar secion con mail y password
export function iniciarsesion(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}

// funcion para autenticarse con google
export function iniciarConGoogle() {
  const provider = new GoogleAuthProvider();
  return signInWithPopup(auth, provider);
}

// Initialize Firebase
// const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);
export function crearPost(titulo,texto) {
  const docRef = addDoc(collection(db, 'post'), {
    title: titulo,
    post: texto,
  });
  console.log('Document written with ID: ', docRef.id);
}

// export const querySnapshot = getDocs(collection(db, "post"));
// querySnapshot.forEach((doc) => {
//   console.log(`${doc.id} => ${doc.data()}`);
// });

export const ShowPost = await getDocs(collection(db, "post"));
ShowPost.forEach((doc) => {

  // doc.data() is never undefined for query doc snapshots
  return(doc.id, " => ", doc.data());
});

export const borrarDoc = id => deleteDoc(doc(db, "post", id));


export const editarPost = (id) => getDoc(doc(db, "post", id));

export const actualizarPost = (id, newFields) =>
  updateDoc(doc(db, "post", id), newFields);

export const editarPosts = () => getDocs(collection(db, "post"));