// importamos la funcion que vamos a testear

import { iniciarsesion } from '../src/Firebase';

describe('iniciarsesion', () => {
  it('Debería ser una función', () => {
    expect(typeof iniciarsesion).toBe('function');
  });
});
