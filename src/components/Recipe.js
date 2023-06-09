export const Recipe = (onNavigate) => {
  const HomeDiv = document.createElement('div');

  // deberia hacer click en la el titulo de la receta y llebarle a ReadRecipe.js
  const viewRecipe = `
        <div><img src="./img/Espaguetis.png" class="imgMain" alt="Espaguetis - Cocinemos Juntos "></div>
        <img class="logo3" src="./img/Logo3.png">
        <section class="container">
        <p>¡Comparte tus mejores creaciones culinarias con el mundo!</p>

        <p>Descubre deliciosas recetas! ¡Haz clic y disfruta!</p>
        <a href#> Pancakes Caseros </a>
        <a href#> Wafles de Avena </a> 
        <a href#> Omelet de espinaca </a>
        <a href#> Gelatina de frutas </a>
        <a href#> Pollo Agridulce </a>
        <a href#> Chuleta Valluna </a>
        </section>
        `;
  HomeDiv.innerHTML = viewRecipe;

  const PostingDiv = document.createElement('div');
  const buttonPosting = document.createElement('button');
  buttonPosting.classList.add('buttonsPrincipals');
  buttonPosting.textContent = 'Publicar';
  buttonPosting.addEventListener('click', () => onNavigate('/posting'));
  HomeDiv.appendChild(buttonPosting);
  PostingDiv.appendChild(HomeDiv);

  const buttonHome = document.createElement('button');
  buttonHome.classList.add('buttonsPrincipals');
  buttonHome.textContent = 'Regresar al Home';
  buttonHome.addEventListener('click', () => onNavigate('/'));
  HomeDiv.appendChild(buttonHome);

  return (HomeDiv);
};
