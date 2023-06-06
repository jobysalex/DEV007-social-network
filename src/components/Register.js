import { onNavigate } from '../main.js';
import { createUserWithEmailAndPassword } from "./Firebase.js";

export const Register = () => {
  const HomeDiv = document.createElement ('div');

  const viewRegister = `
    <div><img src="./img/tarta.jpg" class="imgTarta" alt="imgTarta - Cocinemos Juntos "></div>
    <img class="logo" src="./img/Logo.png">
    <section class="newRegister">
      <h2>Registrarse</h2>
      <label> Ingresa tu correo </label>
      <input type="email" id="email" placeholder="Ingresa tu correo ejemplo@gmail.com " />
      <label> Ingresa tu Contraseña </label>
      <input type="password" id="password" placeholder="xxx" />
      <label> Confirma tu Contraseña </label>
      <input type="password" id="password" placeholder="xxx" />
    </section>
    `;
  HomeDiv.innerHTML = viewRegister;
  //return homeDiv;

  // HomeDiv.textContent = 'Bienvenida al registro';
  const buttonPosting = document.createElement('button');
  buttonPosting.textContent = 'Registrarse';
  buttonPosting.addEventListener('click', () => onNavigate('/Posting'));
  HomeDiv.appendChild(buttonPosting);

  const buttonHome = document.createElement ('button');
  buttonHome.textContent = 'Regresar al home';
  buttonHome.addEventListener('click', () => onNavigate('/')); //esto es para que vuelva al home
  HomeDiv.appendChild(buttonHome);

  return HomeDiv;

};
