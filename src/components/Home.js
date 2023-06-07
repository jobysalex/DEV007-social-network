export const Home = (onNavigate) => {
  const HomeDiv = document.createElement('div');

  const viewHome = `
  <div><img src="./img/Vegetales.jpg" class="imgMain" alt="Imagen de Vegetales - Cocinemos Juntos "></div>
  <img class="logo" src="./img/Logo.png">
  <section class="container">
    <h1>¿Cocinamos Juntos?</h1>
    <p>¡Encuentra, comparte y crea deliciosas recetas mientras haces amigos y disfrutas de una experiencia culinaria única!
    </p>
  </section>
  `;
  HomeDiv.innerHTML = viewHome;

  const buttonRegister = document.createElement('button');
  buttonRegister.classList.add('buttonsPrincipals');

  const buttonLogin = document.createElement('button');
  buttonLogin.classList.add('buttonsPrincipals');
  buttonRegister.textContent = 'Registrate';

  buttonLogin.textContent = 'Inicia sesión';

  buttonRegister.addEventListener('click', () => onNavigate('/register'));
  buttonLogin.addEventListener('click', () => onNavigate('/login'));

  HomeDiv.appendChild(buttonRegister);
  HomeDiv.appendChild(buttonLogin);

  return HomeDiv;
};
