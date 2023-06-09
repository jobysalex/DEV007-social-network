import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Firebase";
import { crearUsuarioConCorreoYContraseña } from "../lib";
export const Register = (onNavigate) => {
  const HomeDiv = document.createElement("div");

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
    `;
  HomeDiv.innerHTML = viewRegister;

  // HomeDiv.textContent = 'Bienvenida al registro';
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
  HomeDiv.appendChild(buttonLogin);

  const buttonHome = document.createElement("button");
  buttonHome.classList.add("buttonsPrincipals");
  buttonHome.textContent = "Regresar al home";
  buttonHome.addEventListener("click", () => onNavigate("/")); //esto es para que vuelva al home
  HomeDiv.appendChild(buttonHome);

  return HomeDiv;
};

//const email = document.getElementById("email2").value;
//const password = document.getElementById("password2").value; //con esto obtengo los valores email y password que fue ingresado
//alert(email + password);
