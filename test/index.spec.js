// importamos la funcion que vamos a testear

import { signInWithEmailAndPassword } from 'firebase/auth';
import { iniciarsesion } from '../src/Firebase';

describe('iniciarsesion', () => {
  it('Debería ser una función', () => {
    expect(typeof iniciarsesion).toBe('function');
  });
});
jest.mock('ferabase/auth');

it('Devería llamar a la función signInWithEmailAndPassword cuando esta se ejecuta', async () => {
  await iniciarsesion('analiaklein@gmail.com', '123456');
  expect(signInWithEmailAndPassword).toHaveBeenCalled();
});

it('Devería devolver un objeto.', async () => {
  signInWithEmailAndPassword.mockReturnValueOnce({});
  const response = await iniciarsesion('analiaklein@gmail.com', '123456');
  console.log(response);
  expect(response.iniciarsesion).toBe('analiaklein@gmail.com');
});

it('devería devolver un obeto.', async () => {
  signInWithEmailAndPassword.mockReturnValueOnce({ user: { email: 'analiaklein@gmail.com' } });
  const response = await iniciarsesion('analiaklein@gmail.com');
  expect(response.user.email).toBe('analiaklein@gmail.com');
});
