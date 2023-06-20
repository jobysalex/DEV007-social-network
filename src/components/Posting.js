import { crearPost, ShowPost, borrarDoc } from '../Firebase.js';

export const Posting = (onNavigate) => {
  const HomeDiv = document.createElement('div');

  const viewPosting = `
  <div>   
  <div><img src = "./img/Cocinar.jpg" class = "imgMain" alt = "Imagen Cocinando - Cocinemos Juntos "></div>     
  </div>
  <section class = "container" id = "container" >
  <img class = "logo3" src = "./img/Logo3.png">
  <p>¡Inspirarás a otros con tu receta!</p>
  <textarea id = "textPost" placeholder = "Comparte tu obra maestra culinaria: título, ingredientes, pasos." >  </textarea>
  <button type ="submit" class = "buttonsPrincipals" id = "buttonPost"> Publicar </button>
  <p class = "disfruta" >¡Descubre deliciosas recetas!<p>
   </section>
   <section class = "containerShowPost" id = "containerShowPost" >
   </section>
  `;

  HomeDiv.innerHTML = viewPosting;

  const section2 = document.createElement('section');
  section2.classList.add('section2');
  // Boton Home
  const buttonHome = document.createElement('button');
  buttonHome.classList.add('buttonsPrincipals');
  buttonHome.textContent = 'Regresar al Home';
  buttonHome.addEventListener('click', () => onNavigate('/'));

  // Constante para atrapar el texto.
  const textPost = HomeDiv.querySelector('#textPost');
  const buttonPost = HomeDiv.querySelector('#buttonPost');
  textPost.addEventListener('keyup', () => {
    buttonPost.removeAttribute('disabled');
  });
  // Boton Publicar
  buttonPost.addEventListener('click', (e) => {
    e.preventDefault();
    console.log(textPost.value);
    crearPost(textPost.value);
  });

  // Mostrar Post
  const containerShowPost = HomeDiv.querySelector('#containerShowPost');
  containerShowPost.innerHTML = ''; // Solo aquí limpiamos chicas
  ShowPost.forEach((doc) => {
    // console.log(doc.data());
    const postDiv = document.createElement('div');
    postDiv.className = 'clasePost';
    postDiv.innerHTML = `
    <div class=verpost >
    <p>${doc.data().post}</p>
    <div>
      <button class="btnDelete" data-id='${doc.id}'>
      🗑 Borrar
      </button>
      <button class="btnEdit" data-id='${doc.id}'>
        🖉 Editar
      </button>
      <button class="btnLikes" data-id='${doc.id}'>
        &#128151 Likes
      </button>
    </div>
    </div>
  `;
    containerShowPost.appendChild(postDiv);
  // Y acá asignamos el append para que luego de leer todas las muestre
  });

  // Borrar Post
  const btnsDelete = containerShowPost.querySelectorAll('.btnDelete');
  btnsDelete.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      console.log(e.target.dataset.id);
      borrarDoc(e.target.dataset.id);
    });
  });

  HomeDiv.appendChild(section2);
  // section2.appendChild(buttonReadRecipe);
  section2.appendChild(buttonHome);

  return HomeDiv;
};
