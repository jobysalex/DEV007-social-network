export const ReadRecipe = (onNavigate) => {
  const HomeDiv = document.createElement("div");

  const viewReadRecipe = `
  <div class = "div2">        
  <img class = "logo3" src = "./img/Logo3.png">
<section class = "container">
  <h2>Pancakes Caseros</h2>
  <h3>Ingredientes (Para cinco Personas):</h3>
    <ul>
      <li>Harina de trigo con leudante (1 taza).</li>
      <li>1 taza de leche líquida (puedes usar también en polvo y agua).</li>
      <li>2 huevos completos.</li>
      <li>2 cucharadas de esparcible Campi®.</li>
      <li>Azúcar o edulcorante al gusto (omite este ingrediente si son saladas).</li>
      <li>Polvo de hornear o bicarbonato de sodio (1 cucharadita).</li>
      <li>Esencia de vainilla al gusto.</li>
      <li>1 pizca de sal.</li>
      <li>Aceite vegetal (para freír).</li>
    </ul>
  <h3>Preparación:</h3><br>  
  <p class = "pRecipe">Usa la licuadora para preparar la mezcla.</p> 
  <p class = "pRecipe">Primero, agrega la esparcible Campi®, los huevos, la leche y la harina de trigo.</p>  
  <p class = "pRecipe">Bate durante unos segundos hasta obtener una buena consistencia.</p> 
  <p class = "pRecipe">Bate durante unos segundos hasta obtener una buena consistencia.</p> 
  <p class = "pRecipe">También puedes hacer este paso a mano, poniendo los ingredientes en un recipiente y mezclando con una paleta de madera.</p>
  <p class = "pRecipe">A la mezcla añade la vainilla, el polvo de hornear o bicarbonato y la pizca de sal.</p> 
  <p class = "pRecipe">Prueba la mezcla para confirmar el sabor y punto de los pancakes.</p>
  <p class = "pRecipe">En un sartén antiadherente, preferiblemente, agrega un poco de esparcible Campi® y calienta a fuego medio.</p> 
  <p class = "pRecipe">Prueba la temperatura vertiendo una gota de la mezcla.</p> 
  <p class = "pRecipe">Si no se pega, empieza a cocinarlos del tamaño que desees.</p> 
  <p class = "pRecipe">Puedes hacer mini pancakes, ¡a los niños les encantan!</p>
  <p class = "pRecipe">A medida que estén listos, resérvalos en un plato y al servirlos, agrégales el topping de tu preferencia.</p>
  <h3>Toppings que le puedes agregar:</h3>
  <p class = "pRecipe">Para las dulces: chocolate, crema de avellanas, mantequilla de maní, miel de maple o mermelada.</p> 
  <p class = "pRecipe">Combina con alguna fruta como bananos, fresas o arándanos. ¡Se vale la creatividad!</p>
  <p class = "pRecipe">Rellenos salados: queso, jamón, esparcible Campi® o cualquier crema para untar de tu preferencia.</p>
  <h3>Consejos para que tus pancakes queden esponjosos:</h3>   
  <p class = "pRecipe">Al hacer la masa, incluye todos los ingredientes. Revisa que sean las porciones exactas y no te excedas al batir.</p>
  <p class = "pRecipe">Asegúrate de que la mezcla quede en la consistencia adecuada; ni muy espesa ni tan líquida.</p> 
  <p class = "pRecipe">Puedes dejar reposar unos minutos.</p>
  <p class = "pRecipe">Prepáralas a fuego medio, lentamente y con el sartén bien caliente.</p> 
  <p class = "pRecipe">Cuando empiecen a burbujear, ¡dales la vuelta!</p>
</section>
</div>
`;

HomeDiv.innerHTML = viewReadRecipe;

const section2 = document.createElement('section');
section2.classList.add('section2');

const buttonRecipe = document.createElement('button');
buttonRecipe.classList.add("buttonsPrincipals");
buttonRecipe.textContent = 'Deliciosas Recetas';
buttonRecipe.addEventListener('click', () => onNavigate('/recipe'));

const buttonPosting = document.createElement('button');
buttonPosting.classList.add('buttonsPrincipals');
buttonPosting.textContent = 'Publicar Tu Receta';
buttonPosting.addEventListener('click', () => onNavigate('/posting'));

const buttonHome = document.createElement('button');
buttonHome.classList.add("buttonsPrincipals");
buttonHome.textContent = 'Regresar al Home';
buttonHome.addEventListener('click', () => onNavigate('/'));

HomeDiv.appendChild(section2);
section2.appendChild(buttonHome);
section2.appendChild(buttonPosting);
section2.appendChild(buttonRecipe);

return (HomeDiv);
};
