export const Login = (onNavigate) => {
  const HomeDiv = document.createElement('div');

  const viewLogin = `
  <div><img src="./img/Waffles.jpg" class="imgMain" alt="Imagen de Waffles - Cocinemos Juntos "></div>
  <img class="logo3" src="./img/Logo3.png">
  <section class="container">
    <h2>Inicia sesión</h2>
    <label> Ingresa tu correo </label>
    <input type="email" class="email" placeholder="ejemplo@gmail.com" />
    <label> Ingresa tu contraseña </label>
    <input type="password" Class="password" placeholder="xxxxx" />
  </section>
  `;

  HomeDiv.innerHTML = viewLogin;

  const buttonPosting = document.createElement('button');
  buttonPosting.classList.add('buttonsPrincipals');
  buttonPosting.textContent = 'Ingresar';
  buttonPosting.addEventListener('click', () => onNavigate('/posting'));
  HomeDiv.appendChild(buttonPosting);

  const buttonHome = document.createElement('button');
  buttonHome.classList.add('buttonsPrincipals');
  buttonHome.textContent = 'Regresar al Home';
  buttonHome.addEventListener('click', () => onNavigate('/'));
  HomeDiv.appendChild(buttonHome);

  return (HomeDiv);
};
