import { iniciarsesion } from '../Firebase.js';

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

  const buttonPosting = document.createElement('button');
  buttonPosting.classList.add('buttonsPrincipals');
  buttonPosting.textContent = 'Ingresar';
  buttonPosting.addEventListener('click', () => onNavigate('/posting'));

  const buttonHome = document.createElement('button');
  buttonHome.classList.add('buttonsPrincipals');
  buttonHome.textContent = 'Regresar al Home';
  buttonHome.addEventListener('click', () => onNavigate('/'));

  const inputEmail = HomeDiv.querySelector('#input-email');
  const inputPassword = HomeDiv.querySelector('#input-password');
  const messageContainer = HomeDiv.querySelector('#message');

  HomeDiv.appendChild(section2);
  section2.appendChild(buttonPosting);
  section2.appendChild(buttonHome);

  buttonPosting.addEventListener('click', (e) => {
    e.preventDefault();
    iniciarsesion(inputEmail.value, inputPassword.value)
      .then(() => {
        onNavigate('/posting');
      })
      .catch((error) => {
        /* validaciones de firebase */
        const errorCode = error.code;
        switch (errorCode) {
          case 'auth/user-not-found':
            messageContainer.setAttribute('class', 'error');
            messageContainer.innerHTML = '❌ Usuario no registrado';
            break;

<<<<<<< HEAD
          case 'auth/wrong-password':
            messageContainer.setAttribute('class', 'error');
            messageContainer.innerHTML = '❌ Contraseña incorrecta';
            break;

          case 'auth/invalid-email':
            messageContainer.setAttribute('class', 'error');
            messageContainer.innerHTML = '❌ Correo inválido';
            break;

          case 'auth/empty-field':
            messageContainer.setAttribute('class', 'error');
            messageContainer.innerHTML = '❌ Rellene todos los campos';
            break;  
        }
        // alert('Usuario o contraseña no valido');
        // onNavigate('/');
      });
  });
  /* Quitar el mensaje de error cuando el usuario escriba */
  const clearErrorMessage = (e) => {
    if (e.target.tagName === "INPUT") {
      messageContainer.innerHTML = "";
    }
  };
=======
    const btnGoogle = HomeDiv.querySelector('.googleSignIn');
    btnGoogle.addEventListener('click', (e) => {
      e.preventDefault();
      iniciarConGoogle().then(() => {
        onNavigate('/recipe');
      });
    });
  });

>>>>>>> 2d29cebf714e3b1a3cc2029dfc939c4bacb3a6e9
  return HomeDiv;
};
