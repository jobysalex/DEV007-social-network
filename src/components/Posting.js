export const Posting = (onNavigate) => {
  const HomeDiv = document.createElement('div');

  const viewPosting = `
  <div>        
  <img class = "logo3" src = "./img/Logo3.png">
  <h2>Pancakes Caseros</h2>

</div>
<section class = "container">
<p>¡Haz clic en el corazón y muestra tu amor por esta deliciosa receta!<p>
</section>
  `;

  HomeDiv.innerHTML = viewPosting;

  const section2 = document.createElement('section');
  section2.classList.add('section2');

  const buttonReadRecipe = document.createElement('button');
  buttonReadRecipe.classList.add("buttonsPrincipals");
  buttonReadRecipe.textContent = 'Deliciosas Recetas';
  buttonReadRecipe.addEventListener('click', () => onNavigate('/readRecipe'));

  const buttonHome = document.createElement('button');
  buttonHome.classList.add("buttonsPrincipals");
  buttonHome.textContent = 'Regresar al Home';
  buttonHome.addEventListener('click', () => onNavigate('/'));

  HomeDiv.appendChild(section2);
  section2.appendChild(buttonReadRecipe);
  section2.appendChild(buttonHome);

  return (HomeDiv);
};

