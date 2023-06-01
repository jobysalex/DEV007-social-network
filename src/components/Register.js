import { onNavigate } from "../main.js";
export const Register = () => {
    const homeDiv = document.createElement ("div");
    homeDiv.textContent = "Bienvenida al registro";
    const buttonHome = document.createElement ("button");
    
     buttonHome.textContent = "Regresar al home";

buttonHome.addEventListener("click", () => onNavigate('/')); //esto es para que vuelva al home

     homeDiv.appendChild(buttonHome);
     
      return homeDiv;
};