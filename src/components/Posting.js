export const Posting = (onNavigate) => {
  const HomeDiv = document.createElement('div');

  const viewPosting = `
      <div><img src="./img/EnConstruccion.jpg" class="imgMain" alt="En Construcción - Cocinemos Juntos "></div>
      <img class="logo" src="./img/Logo.png">
      <section class="container">
        <h2> Página en Construcción</h2>
      </section>
      `;
  HomeDiv.innerHTML = viewPosting;

  const buttonHome = document.createElement('button');
  buttonHome.classList.add('buttonsPrincipals');
  buttonHome.textContent = 'Regresar al Home';
  buttonHome.addEventListener('click', () => onNavigate('/'));
  HomeDiv.appendChild(buttonHome);

  return (HomeDiv);
};
