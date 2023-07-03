// importamos la funcion que vamos a testear

import {
  createUserWithEmailAndPassword,
  // getAuth,
  signInWithEmailAndPassword,
}
  from 'firebase/auth';
// import { addDoc } from 'firebase/firestore';
import { addDoc } from 'firebase/firestore';
import {
  crearPost,
  // auth,
  crearUsuarioConCorreoYContraseña,
  iniciarsesion,
  obtenerCorreoUsuario,
} from '../src/Firebase';

describe('iniciarsesion', () => {
  it('Debería ser una función', () => {
    expect(typeof iniciarsesion).toBe('function');
  });
});
describe('crearUsuarioConCorreoYContraseña', () => {
  it('Es Una Funcion', () => {
    expect(typeof crearUsuarioConCorreoYContraseña).toBe('function');
  });
});

describe('obtenerCorreoUsuario', () => {
  it('debería ser una funcion', () => {
    expect(typeof obtenerCorreoUsuario).toBe('function');
    // it('obtener usuario', () => {
    // expect((auth, 'analiaklein@gmail.com')).toBe('analiaklein@gmail.com');
    // });
  });
});

jest.mock('firebase/auth');
jest.mock('firebase/firestore');

/* it('debería llamar a la función', async () => {
  getAuth('analiaklein@gmail.com');
  expect(auth, {
    currentUser: {
      email: 'analiaklein@gmail.com',
    },
  });
}); */

it('Debería llamar a la función signInWithEmailAndPassword cuando esta se ejecuta', async () => {
  await iniciarsesion('analiaklein@gmail.com', '123456');
  expect(signInWithEmailAndPassword).toHaveBeenCalled();
});

it('Debería llamar a la funcion.', async () => {
  signInWithEmailAndPassword.mockReturnValueOnce({ iniciarsesion: 'analiaklein@gmail.com' });
  const response = await iniciarsesion('analiaklein@gmail.com', '123456');
  console.log(response);
  expect(response.iniciarsesion).toBe('analiaklein@gmail.com');
});

it('debería devolver un objeto con propiedad email.', async () => {
  signInWithEmailAndPassword.mockReturnValueOnce({ user: { email: 'analiaklein@gmail.com' } });
  const response = await iniciarsesion('analiaklein@gmail.com');
  expect(response.user.email).toBe('analiaklein@gmail.com');
});

it('Debería llamar a la función createUserWithEmailAndPassword cuando esta se ejecuta', async () => {
  createUserWithEmailAndPassword.mockReturnValueOnce({ email: 'analiaklein@gmail.com', contraseña: '123456' });
  const response = await crearUsuarioConCorreoYContraseña('analiaklein@gmail.com', '123456');
  expect(response).toEqual({ email: 'analiaklein@gmail.com', contraseña: '123456' });
});
/* it('Debería llamar a la función GoogleAuthProvider cuando esta se ejecuta', async () => {
  GoogleAuthProvider.mockReturnValueOnce();
  const response = await iniciarConGoogle();
  expect(response.iniciarConGoogle).toHaveBeenCalled();
}); */

it('Debería llamar a la función crearPost cuando esta se ejecuta', async () => {
  addDoc.mockReturnValueOnce({
    title: 'titulo',
    post: 'texto',
    user: 'email',
    like: '',
  });
  const response = crearPost('titulo', 'texto', 'email', '');
  expect(response).toEqual({
    title: 'titulo',
    post: 'texto',
    user: 'email',
    like: '',
  });
});
/* it('debería llamar a la función', async () => {
  addDoc.mockReturnValueOnce(crearPost);
  // eslint-disable-next-line jest/valid-expect
  expect(auth, {
    currentUser: {
      email: 'analiaklein@gmail.com',
    },
  });
}); */
