// import { createUserWithEmailAndPassword } from "firebase/auth";
// import { auth } from "../Firebase";
import { crearUsuarioConCorreoYContraseña } from '../lib';

export const Register = (onNavigate) => {
  const HomeDiv = document.createElement('div');

  const viewRegister = `

    <div><img src="./img/tarta.jpg" class="imgMain" alt="Imagen de Tarta - Cocinemos Juntos "></div>
    <img class="logo3" src="./img/Logo3.png">
    <section class="container">
      <h2>Registrarse</h2>
      <label> Ingresa tu Correo </label>
      <input type="email" class="email" id="email2" placeholder="ejemplo@gmail.com " />
      <label> Ingresa tu Contraseña </label>
      <input type="password" class="password" id="password2" placeholder="xxx" />
      </section>
      <button type="button" class="googleSignIn" id="googleButton">
      <img src="img/LogoGoogle.png" alt="GoogleIcon" class="GoogleIcon">
      <span id="registerGoogle">Registrate con Google</span>
      </button>
    `;

  <div><img src = "./img/tarta.jpg" class = "imgMain" alt = "imgen de Tarta - Cocinemos Juntos "></div>
  <section class = "container">
    <img class = "logo3" src = "./img/Logo3.png">
    <h2>Registrarse</h2>
    <label> Ingresa tu correo </label>
    <input type = "email" class = "email" id = "email2" placeholder = "ejemplo@gmail.com " />
    <label> Ingresa tu Contraseña </label>
    <input type = "password" class = "password" id = "password2" placeholder = "xxxxxxx" />
  </section>
  `;


  HomeDiv.innerHTML = viewRegister;
  const section2 = document.createElement('section');
  section2.classList.add('section2');


  // HomeDiv.textContent = 'Bienvenida al registro';
  const buttonLogin = document.createElement('button');
  buttonLogin.classList.add('buttonsPrincipals');
  buttonLogin.textContent = 'Registrarse';

  const buttonLogin = document.createElement("button");
  buttonLogin.classList.add("buttonsPrincipals");
  buttonLogin.textContent = "Registrarse";

  // buttonLogin.addEventListener('click', () => onNavigate('/login'));
  buttonLogin.onclick = function () {
    const inputEmail = HomeDiv.querySelector('#email2');
    const inputPassword = HomeDiv.querySelector('#password2');
    // console.log(inputEmail.value);
    // console.log(inputPassword.value);
    crearUsuarioConCorreoYContraseña(inputEmail.value, inputPassword.value)
      .then(() => {
        onNavigate('/login');
      })
      .catch((err) => console.log(err));
  };


  HomeDiv.appendChild(buttonLogin);

  const buttoGoogle = document.createElement('button');
  buttoGoogle.classList.add('googleSignIn');
  buttoGoogle.textContent = 'Registrarse con Google';
  HomeDiv.appendChild(buttoGoogle);


  const buttonHome = document.createElement('button');
  buttonHome.classList.add('buttonsPrincipals');
  buttonHome.textContent = 'Regresar al home';
  buttonHome.addEventListener('click', () => onNavigate('/')); // esto es para que vuelva al home
  HomeDiv.appendChild(buttonHome);


  const buttonHome = document.createElement("button");
  buttonHome.classList.add("buttonsPrincipals");
  buttonHome.textContent = "Regresar al home";
  buttonHome.addEventListener("click", () => onNavigate("/")); //esto es para que vuelva al home

  HomeDiv.appendChild(section2);
  section2.appendChild(buttonLogin);
  section2.appendChild(buttonHome);

  return HomeDiv;
};

// const email = document.getElementById("email2").value;
// eslint-disable-next-line max-len
// const password = document.getElementById("password2").value; //con esto obtengo los valores email y password que fue ingresado
// alert(email + password);
