import { onNavigate } from '../main.js';

export const Posting = () => {
  const HomeDiv = document.createElement('div');

  const viewPosting = `
      <div><img src="./img/waffles.jpg" class="Wafles" alt="wafles - Cocinemos Juntos "></div>
      <img class="logo" src="./img/Logo.png">
      <section class="newRegister">
        <h2> Página en Construcción</h2>
      </section>
      `;
  HomeDiv.innerHTML = viewPosting;

  const buttonHome = document.createElement('button');
  buttonHome.textContent = 'Regresar al Home';
  buttonHome.addEventListener('click', () => onNavigate('/'));
  HomeDiv.appendChild(buttonHome);

  return (HomeDiv);
};
