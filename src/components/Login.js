import { signInWithEmailAndPassword } from "firebase/auth";
export const Login = (onNavigate) => {
  const HomeDiv = document.createElement('div');

  const viewLogin = `
  <div><img src="./img/Waffles.jpg" class="imgMain" alt="Imagen de Waffles - Cocinemos Juntos "></div>
  <img class="logo3" src="./img/Logo3.png">
  <section class="container">
    <h2>Inicia sesión</h2>
    <label> Ingresa tu correo </label>
    <input type="email" class="email" id="input-email"placeholder="ejemplo@gmail.com" />
    <label> Ingresa tu contraseña </label>
    <input type="password" Class="password" id="input-password" placeholder="xxxxx" />
  </section>
  `;

  HomeDiv.innerHTML = viewLogin;

  const buttonRecipe = document.createElement('button');
  buttonRecipe.classList.add('buttonsPrincipals');
  buttonRecipe.textContent = 'Ingresar';
  buttonRecipe.addEventListener('click', () => onNavigate('/recipe'));
  HomeDiv.appendChild(buttonRecipe);

  const buttonHome = document.createElement('button');
  buttonHome.classList.add('buttonsPrincipals');
  buttonHome.textContent = 'Regresar al Home';
  buttonHome.addEventListener('click', () => onNavigate('/'));
  HomeDiv.appendChild(buttonHome);

  const inputEmail = HomeDiv.querySelector('#input-email');
  const inputPassword = HomeDiv.querySelector('#input-password');

  buttonRecipe.addEventListener('click', (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(
      inputEmail.value,
      inputPassword.value
    ).them(() => {
      onNavigate('/');
    });
  });


  return (HomeDiv);
};
