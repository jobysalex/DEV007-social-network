// export const Recipe = (onNavigate) => {
//   const HomeDiv = document.createElement('div');

//   // deberia hacer click en la el titulo de la receta y llebarle a ReadRecipe.js
//   const viewRecipe = `
//   <div><img src = "./img/Espaguetis.png" class = "imgMain" alt = "Espaguetis - Cocinemos Juntos "></div>
//   <section class = "container">
//     <img class = "logo3" src = "./img/Logo3.png">
//     <div class = "div3">
//       <p class = "pDiv">Descubre deliciosas recetas! ¡Haz clic y disfruta!</p>
//         <a href = "ReadRecipe.js"><input type = "button" class = "titleRecipe" value = "Pancakes Caseros"></a> 
//         <a href = "#"><input type = "button" class = "titleRecipe" value = "Wafles de Avena"></a> 
//         <a href = "#"><input type = "button" class = "titleRecipe" value = "Omelet de Espinaca"></a> 
//         <a href = "#"><input type = "button" class = "titleRecipe" value = "Gelatina de Frutas"></a> 
//         <a href = "#"><input type = "button" class = "titleRecipe" value = "Pollo Agridulce"></a> 
//         <a href = "#"><input type = "button" class = "titleRecipe" value = "Chuleta Valluna"></a> 
//     </div>    
//   </section>
//   `;

//   HomeDiv.innerHTML = viewRecipe;

//   const section2 = document.createElement('section');
//   section2.classList.add('section2');

//   const pPosting = document.createElement('p');
//   pPosting.classList.add('pDiv');
//   pPosting.textContent = '¡Comparte tus mejores creaciones culinarias con el mundo!';
  
//   const buttonReadRecipe = document.createElement('button');
//   buttonReadRecipe.classList.add("buttonsPrincipals");
//   buttonReadRecipe.textContent = 'Ir a las Recetas';
//   buttonReadRecipe.addEventListener('click', () => onNavigate('/readRecipe'));

//   const buttonPosting = document.createElement('button');
//   buttonPosting.classList.add('buttonsPrincipals');
//   buttonPosting.textContent = 'Publicar Tu Receta';
//   buttonPosting.addEventListener('click', () => onNavigate('/posting'));

//   const buttonHome = document.createElement('button');
//   buttonHome.classList.add('buttonsPrincipals');
//   buttonHome.textContent = 'Regresar al Home';
//   buttonHome.addEventListener('click', () => onNavigate('/'));
  
//   HomeDiv.appendChild(section2);
//   section2.appendChild(pPosting);
//   section2.appendChild(buttonReadRecipe);
//   section2.appendChild(buttonPosting);
//   section2.appendChild(buttonHome);


//   return (HomeDiv);
// };
