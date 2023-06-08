import { createUserWithEmailAndPassword } from 'firebase/auth';
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
      <label> Confirma tu Contraseña </label>
      <input type="password" class="password" placeholder="xxx" />
    </section>
    `;
  HomeDiv.innerHTML = viewRegister;

  // HomeDiv.textContent = 'Bienvenida al registro';
  const buttonLogin = document.createElement('button');
  buttonLogin.classList.add('buttonsPrincipals');
  buttonLogin.textContent = 'Registrarse';
  buttonLogin.addEventListener('click', () => onNavigate('/login'));
  buttonLogin.addEventListener('click', () => {
    //const email = document.getElementById("email2").value;
    //const password = document.getElementById("password2").value; //con esto obtengo los valores email y password que fue ingresado
  //alert(email + password);

  const inputEmail = HomeDiv.querySelector('#input-email2');
  const inputPassword = HomeDiv.querySelector('#input-password2');

  buttonLogin.addEventListener('click', (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(
      inputEmail.value,
      inputPassword.value
    ) .them(() => {
      onNavigate('/login');
    });
  });

  
  }); 
  HomeDiv.appendChild(buttonLogin);

  const buttonHome = document.createElement('button');
  buttonHome.classList.add('buttonsPrincipals');
  buttonHome.textContent = 'Regresar al home';
  buttonHome.addEventListener('click', () => onNavigate('/')); //esto es para que vuelva al home
  HomeDiv.appendChild(buttonHome);

  return HomeDiv;
};
