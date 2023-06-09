export const ReadRecipe = (onNavigate) => {
  const HomeDiv = document.createElement("div");

  const viewReadRecipe = `
        <img class="logo3" src="./img/Logo3.png">
        <section class="container">
          <p>¡Haz clic en el corazón y muestra tu amor por esta deliciosa receta!<p>
        </section>
        `;
  HomeDiv.innerHTML = viewReadRecipe ;

  const buttonHome = document.createElement("button");
  buttonHome.classList.add("buttonsPrincipals");
  buttonHome.textContent = "Regresar al Home";
  buttonHome.addEventListener("click", () => onNavigate("/"));
  HomeDiv.appendChild(buttonHome);

  return HomeDiv;
};
