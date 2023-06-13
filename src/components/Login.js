import { iniciarConGoogle, iniciarsesion } from '../Firebase.js';

export const Login = (onNavigate) => {
  const HomeDiv = document.createElement('div');
  const viewLogin = `
  <div><img src = "./img/Waffles.jpg" class = "imgMain" alt = "imgen de Waffles - Cocinemos Juntos "></div>
  <section class = "container">
    <img class = "logo3" src = "./img/Logo3.png">
    <h2>Inicia sesión</h2>
    <label> Ingresa tu correo </label>
    <input type = "email" class = "email" id = "input-email" placeholder = "ejemplo@gmail.com" />
    <label> Ingresa tu contraseña </label>
    <input type = "password" class = "password" id = "input-password" placeholder = "xxxxxxx" />
  </section>
  `;

  HomeDiv.innerHTML = viewLogin;
  const section2 = document.createElement('section');
  section2.classList.add('section2');

  const buttonRecipe = document.createElement('button');
  buttonRecipe.classList.add('buttonsPrincipals');
  buttonRecipe.textContent = 'Ingresar';
  buttonRecipe.addEventListener('click', () => onNavigate('/recipe'));

  const buttonHome = document.createElement('button');
  buttonHome.classList.add('buttonsPrincipals');
  buttonHome.textContent = 'Regresar al Home';
  buttonHome.addEventListener('click', () => onNavigate('/'));

  const buttonGoogle = document.createElement('button');
  buttonGoogle.classList.add('googleSignIn');
  buttonGoogle.textContent = 'Iniciar Seción con Google';

  const inputEmail = HomeDiv.querySelector('#input-email');
  const inputPassword = HomeDiv.querySelector('#input-password');

  HomeDiv.appendChild(section2);
  section2.appendChild(buttonRecipe);
  section2.appendChild(buttonHome);
  section2.appendChild(buttonGoogle);

  buttonRecipe.addEventListener('click', (e) => {
    e.preventDefault();
    iniciarsesion(inputEmail.value, inputPassword.value)
      .then(() => {
        onNavigate('/recipe');
      })
      .catch(() => {
        alert('Usuario o contraseña no valido');
        onNavigate('/');
      });

    const btnGoogle = HomeDiv.querySelector('.googleSignIn');
    btnGoogle.addEventListener('click', (e) => {
      e.preventDefault();
      iniciarConGoogle().then(() => {
        onNavigate('/recipe');
      });
    });

    return HomeDiv;
  });
};
