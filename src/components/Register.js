export const Register = (onNavigate) => {
  const HomeDiv = document.createElement('div');

  const viewRegister = `
    <div><img src="./img/tarta.jpg" class="imgMain" alt="Imagen de Tarta - Cocinemos Juntos "></div>
    <img class="logo3" src="./img/Logo3.png">
    <section class="container">
      <h2>Registrarse</h2>
      <label> Ingresa tu Correo </label>
      <input type="email" class="email" placeholder="ejemplo@gmail.com " />
      <label> Ingresa tu Contraseña </label>
      <input type="password" class="password" placeholder="xxx" />
      <label> Confirma tu Contraseña </label>
      <input type="password" class="password" placeholder="xxx" />
    </section>
    `;
  HomeDiv.innerHTML = viewRegister;

  // HomeDiv.textContent = 'Bienvenida al registro';
  const buttonPosting = document.createElement('button');
  buttonPosting.classList.add('buttonsPrincipals');
  buttonPosting.textContent = 'Registrarse';
  buttonPosting.addEventListener('click', () => onNavigate('/posting'));
  HomeDiv.appendChild(buttonPosting);

  const buttonHome = document.createElement('button');
  buttonHome.classList.add('buttonsPrincipals');
  buttonHome.textContent = 'Regresar al home';
  buttonHome.addEventListener('click', () => onNavigate('/')); //esto es para que vuelva al home
  HomeDiv.appendChild(buttonHome);

  return HomeDiv;
};
