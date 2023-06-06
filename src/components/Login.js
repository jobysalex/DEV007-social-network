//import { onNavigate } from '../main.js';

export const Login = (onNavigate) => {
  const HomeDiv = document.createElement('div');

  const viewLogin = `
  <div><img src="./img/tarta.jpg" class="imgTarta" alt="imgTarta - Cocinemos Juntos "></div>
  <img class="logo" src="./img/Logo.png">
  <section class="Login">
    <h2>Inicia sesión</h2>
    <label> Ingresa tu correo </label>
    <input type="email" id="email" placeholder="ejemplo@gmail.com" />
    <label> Ingresa tu contraseña </label>
    <input type="password" id="password" placeholder="xxxxx" />
  </section>
  `;

  HomeDiv.innerHTML = viewLogin;

  //HomeDiv.textContent = 'Bienvenida al Login';

  const buttonPosting = document.createElement('button');
  buttonPosting.textContent = 'Ingresar';
  buttonPosting.addEventListener('click', () => onNavigate('/posting'));
  HomeDiv.appendChild(buttonPosting);

  const buttonHome = document.createElement('button');
  buttonHome.textContent = 'Regresar al Home';
  buttonHome.addEventListener('click', () => onNavigate('/'));
  HomeDiv.appendChild(buttonHome);

  return (HomeDiv);
};
