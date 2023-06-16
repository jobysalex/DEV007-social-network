import {
  iniciarConGoogle,
} from '../Firebase.js';

export const Home = (onNavigate) => {
  const HomeDiv = document.createElement('div');

  const viewHome = `

  <div><img src = "./img/Vegetales.jpg" class = "imgMain" alt = "Imagen de Vegetales - Cocinemos Juntos "></div>
  <section class = "container">
    <img class = "logo" src = "./img/Logo.png">
    <h1>¿Cocinamos Juntos?</h1>
    <p>¡Encuentra, comparte y crea deliciosas recetas mientras haces amigos y disfrutas de una experiencia culinaria única!</p>
  </section>
  `;
  HomeDiv.innerHTML = viewHome;

  const section2 = document.createElement('section');
  section2.classList.add('section2');

  const buttonRegister = document.createElement('button');
  buttonRegister.classList.add('buttonsPrincipals');
  buttonRegister.textContent = 'Registrate';
  buttonRegister.addEventListener('click', () => onNavigate('/register'));

  const buttonLogin = document.createElement('button');
  buttonLogin.classList.add('buttonsPrincipals');
  buttonLogin.textContent = 'Inicia sesión';
  buttonLogin.addEventListener('click', () => onNavigate('/login'));

  const buttonGoogle = document.createElement('button');
  buttonGoogle.classList.add('googleSignIn');
  const imgGoogle = document.createElement('img');
  imgGoogle.classList.add('googleIcon');
  imgGoogle.src = '../img/iconGoogle3.jpg';
  buttonGoogle.textContent = 'Acceder con Google';

  buttonGoogle.addEventListener('click', (e) => {
    e.preventDefault();
    iniciarConGoogle()
      .then(() => {
        onNavigate('/posting');
      });
  });
  // const buttonPosting = document.createElement('button');
  // buttonPosting.classList.add('buttonsPrincipals');
  // buttonPosting.textContent = 'Deliciosas Recetas';
  // buttonPosting.addEventListener('click', () => onNavigate('/posting'));

  HomeDiv.appendChild(section2);
  section2.appendChild(buttonRegister);
  section2.appendChild(buttonLogin);
  section2.appendChild(buttonGoogle);
  buttonGoogle.appendChild(imgGoogle);

  return HomeDiv;
};
