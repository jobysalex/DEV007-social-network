import {
  crearUsuarioConCorreoYContraseña,
  iniciarConGoogle,
} from '../Firebase.js';

export const Register = (onNavigate) => {
  const HomeDiv = document.createElement("div");

  const viewRegister = `
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

  const buttonLogin = document.createElement("button");
  buttonLogin.classList.add("buttonsPrincipals");
  buttonLogin.textContent = "Registrarse";
  // buttonLogin.addEventListener('click', () => onNavigate('/login'));
  buttonLogin.onclick = function () {
    const inputEmail = HomeDiv.querySelector("#email2");
    const inputPassword = HomeDiv.querySelector("#password2");
    console.log(inputEmail.value);
    console.log(inputPassword.value);
    crearUsuarioConCorreoYContraseña(inputEmail.value, inputPassword.value)
      .then(() => {
        onNavigate("/login");
      })
      .catch((err) => console.log(err));
  };
  const buttonGoogle = document.createElement('button');
  buttonGoogle.classList.add('googleSignIn');
  buttonGoogle.textContent = 'Registrarse con Google';

  const buttonHome = document.createElement("button");
  buttonHome.classList.add("buttonsPrincipals");
  buttonHome.textContent = "Regresar al home";
  buttonHome.addEventListener("click", () => onNavigate("/")); // esto es para que vuelva al home

  buttonGoogle.addEventListener('click', (e) => {
    e.preventDefault();
    iniciarConGoogle(
      inputEmail.value,
      inputPassword.value,
    ).them(() => {
      onNavigate('/recipe');
    });
  });

  HomeDiv.appendChild(section2);
  section2.appendChild(buttonLogin);
  section2.appendChild(buttonHome);
  section2.appendChild(buttonGoogle);

  return HomeDiv;
};
