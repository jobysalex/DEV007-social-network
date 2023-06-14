export const Posting = (onNavigate) => {
  const HomeDiv = document.createElement('div');

  const viewPosting = `
  <div>   
  <div><img src = "./img/Vegetales.jpg" class = "imgMain" alt = "Imagen de Vegetales - Cocinemos Juntos "></div>     
  <img class = "logo3" src = "./img/Logo3.png">
  <p>Comparte tu obra maestra culinaria: título, ingredientes, pasos. ¡Inspirarás a otros con tu receta!</p>
  <textarea class = "Post" >  </textarea>
  <input type = "button" class = "buttonsPrincipals" value = "Publicar">
  </div>
  <section class = "container">
  <p>¡Descubre deliciosas recetas! ¡Haz clic y disfruta!<p>
  <textarea class = "Post" >  </textarea>
  </section>

  `;

  HomeDiv.innerHTML = viewPosting;

  const section2 = document.createElement('section');
  section2.classList.add('section2');

  // const buttonReadRecipe = document.createElement('button');
  // buttonReadRecipe.classList.add('buttonsPrincipals');
  // buttonReadRecipe.textContent = 'Deliciosas Recetas';
  // buttonReadRecipe.addEventListener('click', () => onNavigate('/readRecipe'));

  const buttonHome = document.createElement('button');
  buttonHome.classList.add('buttonsPrincipals');
  buttonHome.textContent = 'Regresar al Home';
  buttonHome.addEventListener('click', () => onNavigate('/'));

  HomeDiv.appendChild(section2);
  // section2.appendChild(buttonReadRecipe);
  section2.appendChild(buttonHome);

  return (HomeDiv);
};
