export const Posting = (onNavigate) => {
  const HomeDiv = document.createElement('div');

  const viewPosting = `
  <div>   
  <div><img src = "./img/Espaguetis.png" class = "imgMain" alt = "Imagen Cocinando - Cocinemos Juntos "></div>     
  </div>
  <section class = "container">
  <img class = "logo3" src = "./img/Logo3.png">
  <p>Comparte tu obra maestra culinaria: título, ingredientes, pasos. ¡Inspirarás a otros con tu receta!</p>
  <textarea>  </textarea>
  <input type = "button" class = "buttonsPrincipals" value = "Publicar">

  <p>¡Descubre deliciosas recetas! ¡Haz clic y disfruta!<p>
  </section>

  `;

  HomeDiv.innerHTML = viewPosting;

  const section2 = document.createElement('section');
  section2.classList.add('section2');

  const buttonHome = document.createElement('button');
  buttonHome.classList.add('buttonsPrincipals');
  buttonHome.textContent = 'Regresar al Home';
  buttonHome.addEventListener('click', () => onNavigate('/'));

  HomeDiv.appendChild(section2);
  // section2.appendChild(buttonReadRecipe);
  section2.appendChild(buttonHome);

  return (HomeDiv);
};
